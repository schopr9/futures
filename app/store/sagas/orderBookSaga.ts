import { eventChannel, END } from 'redux-saga';
import { call, put, take, fork, cancel, cancelled } from 'redux-saga/effects';
import * as websocketActions from '../actions/websocketActions';
import * as LiveDataTypes from '../actions/types';

// Use this to actually throw exceptions, allows for easier debugging.

function createWebSocketConnection() {
  return new Promise((resolve, reject) => {
    const socket = new WebSocket('wss://www.cryptofacilities.com/ws/v1');

    socket.onopen = function () {
      resolve(socket);
      socket.send(JSON.stringify({
        event: 'subscribe',
        feed: 'book_ui_1',
        product_ids: ['PI_XBTUSD']
      }))
    };

    socket.onerror = function (evt) {
      reject(evt);
    };
  });
}

function createSocketChannel(socket) {
  return eventChannel((emit) => {
    socket.onmessage = (event) => {
      emit(event.data);
    };

    socket.onclose = () => {
      emit(END);
    };

    const unsubscribe = () => {
      socket.onmessage = null;
    };

    return unsubscribe;
  });
}

function* listenForSocketMessages() {
  let socket;
  let socketChannel;

  try {
    socket = yield call(createWebSocketConnection);
    socketChannel = yield call(createSocketChannel, socket);

    // tell the application that we have a connection
    yield put(websocketActions.connectionSuccess('Connected'));
    yield put(websocketActions.orderBookReset());

    while (true) {
      // wait for a message from the channel
      const payload = yield take(socketChannel);

      // a message has been received, dispatch an action with the message payload
      yield put(websocketActions.incomingEvent(payload));
    }
  } catch (error) {
    yield put(
      websocketActions.connectionFailed(
        'Error while connecting to the WebSocket',
      ),
    );
  } finally {
    if (yield cancelled()) {
      // close the channel
      socketChannel.close();

      // close the WebSocket connection
      socket.close();
    } else {
      yield put(
        websocketActions.connectionFailed('WebSocket disconnected'),
      );
    }
  }
}

export function* connect() {
  // starts the task in the background
  const socketTask = yield fork(listenForSocketMessages);

  // when DISCONNECT action is dispatched, we cancel the socket task
  yield take(LiveDataTypes.DISCONNECT);
  yield cancel(socketTask);
  yield put(websocketActions.disconnectSuccess());
}
