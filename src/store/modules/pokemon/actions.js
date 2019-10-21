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

export function addPokemonRequest(data) {
  return {
    type: '@pokemon/ADD_POKEMON_REQUEST',
    payload: { data },
  };
}

export function addPokemonSuccess(data) {
  return {
    type: '@pokemon/ADD_POKEMON_SUCCESS',
    payload: { data },
  };
}

export function deletePokemonRequest(id) {
  return {
    type: '@pokemon/DELETE_POKEMON',
    id,
  };
}

export function loadMore(qty) {
  return {
    type: '@pokemon/LOAD_MORE',
    qty,
  };
}
