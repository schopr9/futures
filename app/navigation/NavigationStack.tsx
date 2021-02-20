import * as React from 'react';
import { NavigationContainer, Theme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { navigationRef } from './NavigationService';

import Home from 'app/screens/Home';

import ThemeController from '../components/ThemeController';
import { StatusBar } from 'react-native';

const Stack = createStackNavigator();

interface IProps {
  theme: Theme;
}

const App: React.FC<IProps> = (props: IProps) => {
  const { theme } = props;

  return (
    <NavigationContainer ref={navigationRef} theme={theme}>
      <StatusBar barStyle={theme.dark ? 'light-content' : 'dark-content'} />

      <Stack.Navigator>
        <Stack.Screen
          name="Bitcoin futures"
          component={Home}
          options={{
            animationTypeForReplace: 'pop',
            headerRight: () => <ThemeController />,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
