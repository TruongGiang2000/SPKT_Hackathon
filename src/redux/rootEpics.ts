import {combineEpics} from 'redux-observable';
import {loginEpic, getProfileEpic} from './systems/epic';
const rootEpics = combineEpics(loginEpic, getProfileEpic);
export default rootEpics;
