import {types} from './actions';
const initState = {
  loading: false,
  token: '',
  messageLogin: '',
  userInfo: {},
  isStudent: undefined,
};
export const systemsReducer: any = (state = initState, actions: any) => {
  const {payload} = actions;
  switch (actions.type) {
    case types.SET_LOADING:
      return {...state, loading: payload.status};
    case types.LOGIN:
      return {...state, token: ''};
    case types.LOGIN_SUCCESS:
      return {
        ...state,
        token: payload.token,
        messageLogin: payload.message,
      };
    case types.LOGIN_FAIL:
      return {
        ...state,
        token: '',
        messageLogin: payload.message,
      };
    case types.GET_PROFILE:
      return {
        ...state,
        userInfo: {},
      };
    case types.GET_PROFILE_SUCCESS:
      return {
        ...state,
        userInfo: payload,
        isStudent: payload.isstudent,
      };
    case types.GET_PROFILE_FAIL:
      return {
        ...state,
        userInfo: {},
      };
    default:
      return state;
  }
};
