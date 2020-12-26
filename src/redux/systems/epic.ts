import {types, systemsAction} from './actions';
import {$axios} from '../../contants/config/api';
import {ofType} from 'redux-observable';
import {mergeMap} from 'rxjs/operators';
export const systemActionInit = (action$: any) => {
  return action$.pipe(
    ofType(types.SET_LOADING),
    mergeMap((act: any) => {
      const {payload} = act;
      return $axios.api
        .post('api/searchProvinces', payload)
        .then((rs: any) => {
          const {data} = rs;
          console.log('searchProvinces', data);
          return systemsAction.setLoading(true);
        })
        .catch((err: any) => {
          console.log('Error', err);
          return systemsAction.setLoading(false);
        });
    }),
  );
};
