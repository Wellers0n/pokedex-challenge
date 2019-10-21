import { takeLatest, call, all, put } from 'redux-saga/effects';

import { toast } from 'react-toastify';
import api from '../../../services/api';
import {
  getPokemonSuccess,
  getPokemonHabillitiesSuccess,
  addPokemonSuccess,
} from './actions';
import history from '../../../services/history';

export function* getPokemon() {
  const response = yield call(api.get, 'pokemon/?offset=0&limit=20"');

  const { results } = response.data;

  yield put(getPokemonSuccess(results));
}

export function* getHabillities() {
  yield put(getPokemonHabillitiesSuccess());
}

export function* addPokemon({ payload }) {
  const { data } = payload;
  yield put(addPokemonSuccess(data));
  toast.success('Gotcha!');

  history.push('/home');
}

export function* loadMore({ qty }) {
  const response = yield call(api.get, `pokemon/?offset=0&limit=${qty + 20}"`);

  const { results } = response.data;

  yield put(getPokemonSuccess(results));
}

export default all([
  takeLatest('@pokemon/GET_POKEMON_REQUEST', getPokemon),
  takeLatest('@pokemon/GET_POKEMON_HABILITIES_REQUEST', getHabillities),
  takeLatest('@pokemon/ADD_POKEMON_REQUEST', addPokemon),
  takeLatest('@pokemon/LOAD_MORE', loadMore),
]);
