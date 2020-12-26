import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {Login, SplashScreen} from '../screens';
import {ItemFunction} from '../components';
import {from} from 'rxjs';
const Stack = createStackNavigator();
const mainRoute = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode={'none'}>
        <Stack.Screen name={'ItemFuction'} component={ItemFunction} />

        <Stack.Screen name={'Login'} component={Login} />
        <Stack.Screen name={'SplashScreen'} component={SplashScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default mainRoute;
