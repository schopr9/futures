import { w3cwebsocket as WebSocket } from 'websocket';

const ws = new WebSocket('wss://www.cryptofacilities.com/ws/v1');

ws.onopen = () => {
  // connection opened
  ws.send(
    JSON.stringify({
      event: 'subscribe',
      feed: 'book_ui_1',
      product_ids: ['PI_XBTUSD'],
    }),
  ); // send a message
};

ws.onmessage = (e) => {
  // a message was received
  console.log(e.data);
};

ws.onerror = (e) => {
  // an error occurred
  console.log(e.message);
};

ws.onclose = (e) => {
  // connection closed
  console.log(e.code, e.reason);
};

export { ws };
