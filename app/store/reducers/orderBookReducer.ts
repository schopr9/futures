import createReducer from 'app/lib/createReducer';
import * as types from 'app/store/actions/types';
import {
  IOrderBook,
  IOrderBookInitialState,
  IOrderBookResponseState,
} from 'app/models/reducers/orderBook';

const initialState: IOrderBookInitialState = {
  bids: {},
  asks: {},
};

function extractData(asks: Array<Array<number>>) {
  let object: IOrderBook = {};
  for (const [price, size] of asks) {
    object[price] = { price, size, total: size };
  }

  return object;
}
export const orderBookReducer = createReducer(initialState, {
  [types.ORDERBOOK_RESPONSE](
    state: IOrderBookInitialState,
    action: IOrderBookResponseState,
  ) {
    const parsedPayload = JSON.parse(action.payload);
    if (parsedPayload.asks || parsedPayload.bids) {
      const asks = extractData(parsedPayload.asks);
      const bids = extractData(parsedPayload.bids);
      return {
        asks: { ...state.asks, ...asks },
        bids: { ...state.bids, ...bids },
      };
    } else {
      return {
        ...state,
      };
    }
  },
  [types.ORDERBOOK_RESET](state: IOrderBookInitialState) {
    return initialState;
  },
});
