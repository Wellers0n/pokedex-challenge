import { all } from 'redux-saga/effects';
import auth from './auth/sagas';
import pokemon from './pokemon/sagas';

export default function* rootSaga() {
  return yield all([auth, pokemon]);
}
