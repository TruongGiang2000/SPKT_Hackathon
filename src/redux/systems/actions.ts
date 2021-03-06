export const types = {
  SET_LOADING: 'SET_LOADING',
  LOGIN: 'LOGIN',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGIN_FAIL: 'LOGIN_FAIL',
  GET_PROFILE: 'GET_PROFILE',
  GET_PROFILE_SUCCESS: 'GET_PROFILE_SUCCESS',
  GET_PROFILE_FAIL: 'GET_PROFILE_FAIL',
  GET_SCHEDULE: 'GET_SCHEDULE',
  GET_SCHEDULE_SUCCESS: 'GET_SCHEDULE_SUCCESS',
  GET_SCHEDULE_FAIL: 'GET_SCHEDULE_FAIL',
  GET_CLASS: 'GET_CLASS',
  GET_CLASS_SUCCESS: 'GET_CLASS_SUCCESS',
  GET_CLASS_FAIL: 'GET_CLASS_FAIL',
  LOGOUT :'LOGOUT'
};
const action = (type: string, payload?: any) => ({type, payload});
export const systemsAction = {
  setLoading: (payload: any) => action(types.SET_LOADING, payload),
  login: (payload: any) => action(types.LOGIN, payload),
  loginSuccess: (payload: any) => action(types.LOGIN_SUCCESS, payload),
  loginFail: (payload: any) => action(types.LOGIN_SUCCESS, payload),
  LogOut:( payload: any) => action(types.LOGOUT, payload),

  getProfile: (payload: any) => action(types.GET_PROFILE, payload),
  getProfileSuccess: (payload: any) =>
    action(types.GET_PROFILE_SUCCESS, payload),
  getProfileFail: (payload: any) => action(types.GET_PROFILE_FAIL, payload),
  getSchedule: (payload: any) => action(types.GET_SCHEDULE, payload),
  getScheduleSuccess: (payload: any) =>
    action(types.GET_SCHEDULE_SUCCESS, payload),
  getScheduleFail: (payload: any) => action(types.GET_SCHEDULE_FAIL, payload),
  getClass: (payload: any) => action(types.GET_CLASS, payload),
  getClassSuccess: (payload: any) => action(types.GET_CLASS_SUCCESS, payload),
  getClassFail: (payload: any) => action(types.GET_CLASS_FAIL, payload),
};
