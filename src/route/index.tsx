import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {
  Login,
  SplashScreen,
  HomeStudentChild,
  HomeTeacher,
  Schedule,
} from '../screens';
const Stack = createStackNavigator();
const mainRoute = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode={'none'}>
        <Stack.Screen name={'SplashScreen'} component={SplashScreen} />
        <Stack.Screen name={'Login'} component={Login} />
        <Stack.Screen name={'HomeStudent'} component={HomeStudentChild} />
        <Stack.Screen name={'HomeTeacher'} component={HomeTeacher} />
        <Stack.Screen name={'Schedule'} component={Schedule} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default mainRoute;
