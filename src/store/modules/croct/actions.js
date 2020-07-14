
export function resquestCroctAction() {
  return {
    type: '@croct/CROCT_REQUEST'
  };
}

export function userReturningAction() {
  return {
    type: '@croct/USER_RETURNING'
  };
}

export function userReturningResponseAction(result) {
  return {
    type: '@croct/USER_RETURNING_RESPONSE',
    payload: { result },

  };
}

export function getUserAction() {
  return {
    type: '@croct/GET_USER',
  };
}

export function setUserAction(payload) {
  return {
    type: '@croct/SET_USER',
    payload: payload
  }
}

export function getUserSuccessAction(result) {
  return {
    type: '@croct/GET_USER_SUCCESS',
    payload: { result },

  };
}

export function setPokemonViewedAction(name) {
  return {
    type: '@croct/SET_POKEMON_VIEWED',
    payload: { name }
  }
}

export function getPokemonViewedAction() {
  return {
    type: '@croct/GET_POKEMON_VIEWED',
  }
}

export function pokemonsViewedSuccessAction(pokemons) {
  return {
    type: '@croct/POKEMONS_VIEWED_SUCCESS',
    payload: { pokemons }
  }
}

export function pokemonsViewedFailAction() {
  return {
    type: '@croct/POKEMONS_VIEWED_FAIL',
  }
}