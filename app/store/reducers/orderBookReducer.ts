import createReducer from 'app/lib/createReducer';
import * as types from 'app/store/actions/types';
import {
  IOrderBook,
  IOrderBookInitialState,
  IOrderBookResponseState,
} from 'app/models/reducers/orderBook';
import { parsePayload } from 'app/utils/extractData';

const initialState: IOrderBookInitialState = {
  bids: [],
  asks: [],
};

export const orderBookReducer = createReducer(initialState, {
  [types.ORDERBOOK_RESPONSE](
    state: IOrderBookInitialState,
    action: IOrderBookResponseState,
  ) {
    const { asks, bids } = parsePayload(action.payload, state.asks, state.bids);
    return {
      asks,
      bids,
    };
  },
  [types.ORDERBOOK_RESET](state: IOrderBookInitialState) {
    return initialState;
  },
});
