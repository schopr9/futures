/*
 * Reducer actions related with login
 */
import * as types from './types';
import { IOrderResponse } from 'app/models/api/order';

export function connectionRequest() {
  return {
    type: types.CONNECTION_REQUEST,
  };
}

/// remove this
export function orderBookReset() {
  return {
    type: types.ORDERBOOK_RESET,
  };
}

export function connectionFailed(message: string) {
  return {
    type: types.CONNECTION_FAILED,
    message,
  };
}

export function connectionSuccess(message: string) {
  return {
    type: types.CONNECTION_RESPONSE,
    message,
  };
}

export function incomingEvent(payload: IOrderResponse) {
  return {
    type: types.ORDERBOOK_RESPONSE,
    payload,
  };
}

export function enableLoader() {
  return {
    type: types.CONNECTION_ENABLE_LOADER,
  };
}

export function disableLoader() {
  return {
    type: types.CONNECTION_DISABLE_LOADER,
  };
}

export function disconnect() {
  return {
    type: types.DISCONNECT,
  };
}

export function disconnectSuccess() {
  return {
    type: types.DISCONNECT_SUCCESS,
  };
}
