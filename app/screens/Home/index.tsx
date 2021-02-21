import React, { useEffect } from 'react';
import { View, AppState } from 'react-native';
import { Text } from 'react-native-paper';
import { useDispatch } from 'react-redux';

import * as websocketActions from 'app/store/actions/websocketActions';
import styles from './styles';
import OrderBookTable from 'app/components/OrderBookTable';

const Home: React.FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(websocketActions.connectionRequest());

    AppState.addEventListener('change', handleAppStateChange);
    return () => {
      AppState.removeEventListener('change', handleAppStateChange);
    };
  }, []);

  const handleAppStateChange = (state) => {
    switch (state) {
      case 'active':
        dispatch(websocketActions.connectionRequest());
        break;
      default:
        //inactive or background
        dispatch(websocketActions.disconnect());
        break;
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.login}>All the prices are in realtime USD </Text>
      <OrderBookTable />
    </View>
  );
};

export default Home;
