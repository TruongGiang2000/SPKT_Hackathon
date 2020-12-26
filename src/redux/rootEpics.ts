import {combineEpics} from 'redux-observable';
import {
  loginEpic,
  getProfileEpic,
  getClassEpic,
  getScheduleEpic,
} from './systems/epic';
const rootEpics = combineEpics(
  loginEpic,
  getProfileEpic,
  getClassEpic,
  getScheduleEpic,
);
export default rootEpics;
