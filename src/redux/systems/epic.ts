import {types, systemsAction} from './actions';
import {$axios} from '../../contants/config/api';
import {ofType} from 'redux-observable';
import {mergeMap} from 'rxjs/operators';
import {actionMain} from '../../utils/actionsMain';
export const loginEpic = (actions$: any) => {
  return actions$.pipe(
    ofType(types.LOGIN),
    mergeMap((act: any) => {
      const {payload} = act;
      return $axios.api
        .post('/loginview', payload)
        .then((rs: any) => {
          const {data} = rs;
          console.log('data', data);
          return systemsAction.loginSuccess(data);
        })
        .catch((err) => {
          return systemsAction.loginFail(err);
        })
        .finally(() => {
          actionMain.loading(false);
        });
    }),
  );
};
export const getProfileEpic = (actions$: any) => {
  return actions$.pipe(
    ofType(types.GET_PROFILE),
    mergeMap((act: any) => {
      const {payload} = act;
      console.log('payloadGetProfile', payload);
      return $axios.api
        .get(`/getprofile/${payload.id}`)
        .then((rs: any) => {
          const {data} = rs;
          console.log('data', data);
          return systemsAction.getProfileSuccess(data);
        })
        .catch((err) => {
          console.log('err', err);
          return systemsAction.getProfileFail(err);
        })
        .finally(() => {
          actionMain.loading(false);
        });
    }),
  );
};
