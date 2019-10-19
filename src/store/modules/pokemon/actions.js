export function getPokemonsRequest() {
  return {
    type: '@pokemon/GET_POKEMON_REQUEST',
  };
}

export function getPokemonSuccess(results) {
  return {
    type: '@pokemon/GET_POKEMON_SUCCESS',
    payload: { results },
  };
}

export function getPokemonHabillitiesRequest() {
  return {
    type: '@pokemon/GET_POKEMON_HABILITIES_REQUEST',
  };
}

export function getPokemonHabillitiesSuccess(data) {
  return {
    type: '@pokemon/GET_POKEMON_HABILITIES_SUCCESS',
    payload: { data },
  };
}
