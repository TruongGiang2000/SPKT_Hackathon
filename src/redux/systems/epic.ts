import {types, systemsAction} from './actions';
import {$axios} from '../../contants/config/api';
import {ofType} from 'redux-observable';
import {mergeMap} from 'rxjs/operators';
export const systemActionInit = ($action: any) => {
  return (
    $action.pipe(ofType()),
    mergeMap(() => {
      return $axios.api
        .get('')
        .then((rs: any) => {})
        .catch((err: any) => {});
    })
  );
};
