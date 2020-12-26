/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {StyleSheet, View, StatusBar} from 'react-native';
import RouteMain from './src/route';
export const App = (props: any) => {
  return (
    <View style={{flex: 1}}>
      <StatusBar barStyle="dark-content" />
      <RouteMain />
    </View>
  );
};

const styles = StyleSheet.create({});
