export interface IOrderBookResponseState {
  type: string;
  payload: string;
}

export interface IOrderBook {
  [index: number]: { price: number; size: number; total: number };
}

export interface IOrderBookInitialState {
  asks: IOrderBook;
  bids: IOrderBook;
}
