/**
 *  Redux saga class init
 */
import { takeEvery, all } from 'redux-saga/effects';
import * as types from '../actions/types';
import { connect } from './orderBookSaga';

export default function* watch() {
  yield all([takeEvery(types.CONNECTION_REQUEST, connect)]);
}
