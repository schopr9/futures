/*
 * combines all th existing reducers
 */
import * as loadingReducer from './loadingReducer';
import * as connectionReducer from './connectionReducer';
import * as themeReducer from './themeReducer';
import * as orderBookReducer from './orderBookReducer';
export default Object.assign(
  connectionReducer,
  loadingReducer,
  themeReducer,
  orderBookReducer,
);
