/**
 * Loading reducer made separate for easy blacklisting
 * Avoid data persist
 */
import createReducer from 'app/lib/createReducer';
import * as types from 'app/store/actions/types';
import { ILoading } from 'app/models/reducers/loading';

const initialState: ILoading = {
  isLoginLoading: false,
};

export const loadingReducer = createReducer(initialState, {
  [types.CONNECTION_ENABLE_LOADER](state: ILoading) {
    return { ...state, isLoginLoading: true };
  },
  [types.CONNECTION_DISABLE_LOADER](state: ILoading) {
    return { ...state, isLoginLoading: false };
  },
});
