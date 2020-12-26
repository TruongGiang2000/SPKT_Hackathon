import {combineReducers} from 'redux';
import {systemsReducer} from './systems/reducer';
export default combineReducers({
  systems: systemsReducer,
});
