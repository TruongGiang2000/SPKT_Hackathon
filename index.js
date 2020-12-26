/**
 * @format
 */

import {AppRegistry} from 'react-native';
import React from 'react';
import App from './App';
import {name as appName} from './app.json';
import configureStore from './src/redux/store';
import {Provider} from 'react-redux';
const app = () => (
  <Provider store={configureStore}>
    <App />
  </Provider>
);
AppRegistry.registerComponent(appName, () => app);
console.disableYellowBox = true;
