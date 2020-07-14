import { takeLatest, all, put } from 'redux-saga/effects';
import history from '../../../services/history';
import { signInSuccess } from './actions';

import { userReturningResponseAction, setUserAction } from './../croct/actions';

export function* signIn(payload) {
  yield put(signInSuccess(payload));
  yield put(setUserAction());
  history.push('home');
}

export function* signOut() {
  localStorage.removeItem('token')
  yield put(userReturningResponseAction(false))
  history.push('/');
}

export default all([
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_OUT', signOut),
]);
