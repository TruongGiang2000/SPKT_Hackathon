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
import ActivityIndicator from './src/components/ActivityIndicator';
const App = (props: any) => {
  const {loading} = props;
  const {token} = props;
  useEffect(() => {
    actionInit(props);
  }, []);
  useEffect(() => {
    if (token) {
      props.getProfile({id: token});
    }
  }, [token]);
  return (
    <View style={{flex: 1}}>
      {loading && <ActivityIndicator />}
      <StatusBar barStyle="light-content" />
      <RouteMain />
    </View>
  );
};
const mapStateFromProps = (state: any) => {
  return {
    loading: state.systems.loading,
    token: state.systems.token,
  };
};
const styles = StyleSheet.create({});
export default connect(mapStateFromProps, {...system})(App);
