/* Login Reducer
 * handles login states in the app
 */
import createReducer from 'app/lib/createReducer';
import * as types from 'app/store/actions/types';

import { IConnectionState } from 'app/models/reducers/connection';
import { IConnectionResponseState } from 'app/models/actions/connection';
const initialState: IConnectionState = {
  isConnected: false,
};

export const loginReducer = createReducer(initialState, {
  [types.CONNECTION_REQUEST](
    state: IConnectionState,
    action: IConnectionResponseState,
  ) {
    return {
      ...state,
    };
  },
  [types.CONNECTION_LOADING_ENDED](state: IConnectionState) {
    return { ...state };
  },
  [types.CONNECTION_RESPONSE](
    state: IConnectionState,
    action: IConnectionResponseState,
  ) {
    return {
      ...state,
      isConnected: true,
    };
  },
  [types.CONNECTION_FAILED](state: IConnectionState) {
    return {
      ...state,
      isConnected: false,
    };
  },
});
