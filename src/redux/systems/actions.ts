export const types = {
  SET_LOADING: 'SET_LOADING',
};
const action = (type: string, payload?: any) => ({type, payload});
export const systemsAction = {
  setLoading: (payload: any) => action(types.SET_LOADING, payload),
};
