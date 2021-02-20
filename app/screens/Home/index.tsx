import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-paper';
import { useDispatch } from 'react-redux';

import * as websocketActions from 'app/store/actions/websocketActions';
import styles from './styles';
import OrderBookTable from 'app/components/OrderBookTable';


const Home: React.FC = () => {
  const dispatch = useDispatch();
  dispatch(websocketActions.connectionRequest());

  return (
    <View style={styles.container}>
      <Text style={styles.login}>All the prices are in realtime USD </Text>
      <OrderBookTable />
    </View>
  );
};

export default Home;
