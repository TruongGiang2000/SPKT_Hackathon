export const types = {
  SET_LOADING: 'SET_LOADING',
  LOGIN: 'LOGIN',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGIN_FAIL: 'LOGIN_FAIL',
  GET_PROFILE: 'GET_PROFILE',
  GET_PROFILE_SUCCESS: 'GET_PROFILE',
  GET_PROFILE_FAIL: 'GET_PROFILE_FAIL',
};
const action = (type: string, payload?: any) => ({type, payload});
export const systemsAction = {
  setLoading: (payload: any) => action(types.SET_LOADING, payload),
  login: (payload: any) => action(types.LOGIN, payload),
  getProfile: (payload: any) => action(types.GET_PROFILE, payload),
};
