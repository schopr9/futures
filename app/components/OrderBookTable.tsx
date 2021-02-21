import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { DataTable, Text } from 'react-native-paper';
import { useSelector } from 'react-redux';

import { IOrderBookInitialState } from 'app/models/reducers/orderBook';

interface IState {
  orderBookReducer: IOrderBookInitialState;
}

const OrderBookTable: React.FC = () => {
  const asks = useSelector((state: IState) => state.orderBookReducer?.asks);
  const bids = useSelector((state: IState) => state.orderBookReducer?.bids);

  return (
    <>
      <DataTable>
        <DataTable.Header>
          <DataTable.Title sortDirection="descending">
            Price ($)
          </DataTable.Title>
          <DataTable.Title numeric>Size</DataTable.Title>
          <DataTable.Title numeric>Total</DataTable.Title>
        </DataTable.Header>
        <ScrollView contentContainerStyle={{ paddingBottom: 160 }}>
          <Text style={styles.text}>Asks</Text>
          {!!asks &&
            asks.map(({ price, size, total }) => {
              return (
                <DataTable.Row key={price}>
                  <DataTable.Cell numeric>{price}</DataTable.Cell>
                  <DataTable.Cell numeric>{size}</DataTable.Cell>
                  <DataTable.Cell numeric>{total}</DataTable.Cell>
                </DataTable.Row>
              );
            })}

          <Text style={styles.text}>Bids</Text>
          {!!bids &&
            bids.map(({ price, size, total }) => {
              return (
                <DataTable.Row key={price}>
                  <DataTable.Cell numeric>{price}</DataTable.Cell>
                  <DataTable.Cell numeric>{size}</DataTable.Cell>
                  <DataTable.Cell numeric>{total}</DataTable.Cell>
                </DataTable.Row>
              );
            })}
        </ScrollView>
      </DataTable>
    </>
  );
};

const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
    fontSize: 18,
    marginTop: 5,
  },
});

export default OrderBookTable;
