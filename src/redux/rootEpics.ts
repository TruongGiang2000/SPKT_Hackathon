import {combineEpics} from 'redux-observable';
import {systemActionInit} from './systems/epic';
const rootEpics = combineEpics(systemActionInit);
export default rootEpics;
