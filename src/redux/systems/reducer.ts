import {types} from './actions';
const initState = {
  loading: false,
};
export const systemsReducer: any = (state = initState, actions: any) => {
  const {payload} = actions;
  switch (actions.type) {
    case types.SET_LOADING:
      return {...state, loading: payload};
    default:
      return state;
  }
};
