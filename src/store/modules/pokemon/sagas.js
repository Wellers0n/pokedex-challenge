import { takeLatest, call, all, put } from 'redux-saga/effects';

import api from '../../../services/api';
import { getPokemonSuccess, getPokemonHabillitiesSuccess } from './actions';

export function* getPokemon() {
  const response = yield call(api.get, 'pokemon/?offset=0&limit=20"');

  const { results } = response.data;

  yield put(getPokemonSuccess(results));
}

export function* getHabillities({ payload }) {
  console.tron.log(payload.id);

  const response = yield call(api.get, `pokemon/${payload.id}`);
  const { data } = response;

  yield put(getPokemonHabillitiesSuccess(data));
}

export default all([
  takeLatest('@pokemon/GET_POKEMON_REQUEST', getPokemon),
  takeLatest('@pokemon/GET_POKEMON_HABILITIES_REQUEST', getHabillities),
]);
