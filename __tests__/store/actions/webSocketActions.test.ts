import {
  connectionRequest,
  orderBookReset,
  connectionFailed,
  connectionSuccess,
  incomingEvent,
  enableLoader,
  disableLoader,
  disconnect,
  disconnectSuccess,
} from 'app/store/actions/websocketActions';
import * as types from 'app/store/actions/types';

describe('Websocket actions', () => {
  it('connectionRequest', () => {
    expect(connectionRequest()).toMatchObject({
      type: types.CONNECTION_REQUEST,
    });
  });
  it('orderBookReset', () => {
    expect(orderBookReset()).toMatchObject({
      type: types.ORDERBOOK_RESET,
    });
  });
  it('connectionRequest', () => {
    expect(connectionRequest()).toMatchObject({
      type: types.CONNECTION_REQUEST,
    });
  });
  it('connectionFailed', () => {
    expect(connectionFailed('failed to connect')).toMatchObject({
      type: types.CONNECTION_FAILED,
      message: 'failed to connect',
    });
  });
  it('connectionSuccess', () => {
    expect(connectionSuccess('connected')).toMatchObject({
      type: types.CONNECTION_RESPONSE,
      message: 'connected',
    });
  });

  it('incomingEvent', () => {
    expect(incomingEvent('{asks: [[54, 89]]}')).toMatchObject({
      type: types.ORDERBOOK_RESPONSE,
      payload: '{asks: [[54, 89]]}',
    });
  });

  it('disableLoader', () => {
    expect(disableLoader()).toMatchObject({
      type: types.CONNECTION_DISABLE_LOADER,
    });
  });
  it('enableLoader', () => {
    expect(enableLoader()).toMatchObject({
      type: types.CONNECTION_ENABLE_LOADER,
    });
  });

  it('disconnect', () => {
    expect(disconnect()).toMatchObject({
      type: types.DISCONNECT,
    });
  });

  it('disconnectSuccess', () => {
    expect(disconnectSuccess()).toMatchObject({
      type: types.DISCONNECT_SUCCESS,
    });
  });
});
