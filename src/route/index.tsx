import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import HomeStudentChild from '../screens/HomeStudent/HomeStudentChild';
import Login from '../screens/Login';
import SplashScreen from '../screens/SpashScreen';
import InformationTeacher from '../screens/HomeTeacher/InformationTeacher';
import InformationStudent from '../screens/HomeStudent/InformationStudent';
import HomeTeacher from '../screens/HomeTeacher/HomeTeacher';
import Classes from '../screens/HomeTeacher/Classes';
import Schedule from '../screens/HomeStudent/Schedule';
import store from '../redux/store';
const Stack = createStackNavigator();
const mainRoute = () => {
  const {systems}: any = store.getState();
  const {token, isStudent} = systems;
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode={'none'}>
        <Stack.Screen name={'SplashScreen'} component={SplashScreen} />
        <Stack.Screen name={'Login'} component={Login} />
        <Stack.Screen name={'HomeTeacher'} component={HomeTeacher} />
        <Stack.Screen name={'HomeStudent'} component={HomeStudentChild} />
        <Stack.Screen name={'Schedule'} component={Schedule} />
        <Stack.Screen
          name={'InformationTeacher'}
          component={InformationTeacher}
        />
        <Stack.Screen
          name={'InformationStudent'}
          component={InformationStudent}
        />
        <Stack.Screen name={'Classes'} component={Classes} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default mainRoute;
