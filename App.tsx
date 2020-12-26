/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useEffect} from 'react';
import {StyleSheet, View, StatusBar} from 'react-native';
import RouteMain from './src/route';
import {connect} from 'react-redux';
import {actionInit} from './src/utils/actionsMain';
import {system} from './src/redux';
const App = (props: any) => {
  useEffect(() => {
    actionInit(props);
  }, []);
  return (
    <View style={{flex: 1}}>
      <StatusBar barStyle="light-content" />
      <RouteMain />
    </View>
  );
};
const mapStateFromProps = (state: any) => {
  return {};
};
const styles = StyleSheet.create({});
export default connect(mapStateFromProps, {...system})(App);
