import React from 'react';
import { DataTable } from 'react-native-paper';
import { useSelector } from 'react-redux';

import { IOrderBookInitialState } from 'app/models/reducers/orderBook';

interface IState {
  orderBookReducer: IOrderBookInitialState;
}

const OrderBookTable: React.FC = () => {
  const asks = useSelector((state: IState) => state.orderBookReducer?.asks);

  return (
    <DataTable>
      <DataTable.Header>
        <DataTable.Title sortDirection="descending">Price ($)</DataTable.Title>
        <DataTable.Title numeric>Size</DataTable.Title>
        <DataTable.Title numeric>Total</DataTable.Title>
      </DataTable.Header>
      {!!asks &&
        Object.values(asks).map((ask) => {
          return (
            <DataTable.Row key={ask.price}>
              <DataTable.Cell numeric>{ask.price}</DataTable.Cell>
              <DataTable.Cell numeric>{ask.size}</DataTable.Cell>
              <DataTable.Cell numeric>{ask.total}</DataTable.Cell>
            </DataTable.Row>
          );
        })}
    </DataTable>
  );
};

export default OrderBookTable;
