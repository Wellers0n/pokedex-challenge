import { takeLatest, call, all, put, select } from 'redux-saga/effects';
import { userReturningResponseAction, getUserSuccessAction, pokemonsViewedSuccessAction, pokemonsViewedFailAction } from './actions'
import { connectCroctPlug, connectCroctPlugWithToken } from './../../../util/index'
import croct from '@croct/plug'


export function* connectionCroct() {
    yield call(connectCroctPlug)
}

export function* setUser() {
    const state = yield select()

    yield call(connectCroctPlugWithToken, state)

    const { email, firstName, lastName } = state.auth.token.payload

    yield croct.user.edit()
        .set('email', email)
        .set('firstName', firstName)
        .set('lastName', lastName)
        .set('avatar', 'https://cdn.bulbagarden.net/upload/thumb/a/ad/Gary_Oak_BW.png/200px-Gary_Oak_BW.png')
        .save();
}

export function* userReturningResponse() {
    const state = yield select()

    yield call(connectCroctPlugWithToken, state)

    const response = yield croct.evaluate('user is returning');

    yield put(userReturningResponseAction(response))
}

export function* getUserSuccess() {
    const state = yield select()

    yield call(connectCroctPlugWithToken, state)

    const response = yield croct.evaluate('user');
    console.log(response)
    yield put(getUserSuccessAction(response))
}

export function* setPokemonViewed(pokemon) {
    const state = yield select()

    yield call(connectCroctPlugWithToken, state)

    yield croct.user.edit()
        .increment(`custom.pokemons.${pokemon.payload.name}`)
        .save()

}

export function* getPokemonViewed() {
    const state = yield select()

    yield call(connectCroctPlugWithToken, state)
    
    try {

        const pokemons = yield croct.evaluate(`keys of user's pokemons sorted in descending order`)

        yield put(pokemonsViewedSuccessAction(pokemons))
    } catch (error) {

        yield put(pokemonsViewedFailAction())

    }

}


export default all([
    takeLatest('@croct/CROCT_REQUEST', connectionCroct),
    takeLatest('@croct/GET_USER', getUserSuccess),
    takeLatest('@croct/SET_USER', setUser),
    takeLatest('@croct/USER_RETURNING', userReturningResponse),
    takeLatest('@croct/SET_POKEMON_VIEWED', setPokemonViewed),
    takeLatest('@croct/GET_POKEMON_VIEWED', getPokemonViewed),

]);