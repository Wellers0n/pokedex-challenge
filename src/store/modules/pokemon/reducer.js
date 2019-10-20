import produce from 'immer';

const INITIAL_STATE = {
  pokemon: [],
  loading: false,
  info: [],
};

export default function pokemon(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@pokemon/GET_POKEMON_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@pokemon/GET_POKEMON_SUCCESS': {
        draft.loading = false;
        draft.pokemon = action.payload.results;
        break;
      }
      case '@pokemon/GET_POKEMON_HABILITIES_REQUEST': {
        draft.loading = true;

        break;
      }
      case '@pokemon/GET_POKEMON_HABILITIES_SUCCESS': {
        draft.loading = false;
        draft.info = action.payload.data;

        break;
      }

      default:
    }
  });
}
