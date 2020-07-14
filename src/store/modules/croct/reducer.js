import produce from 'immer';

const INITIAL_STATE = {
    loading: false,
    userIsReturning: false,
    profile: {},
    pokemonsViewed: []
};

export default function croct(state = INITIAL_STATE, action) {
    return produce(state, draft => {
        switch (action.type) {
            case '@croct/CROCT_REQUEST': {
                draft.loading = true;
                break;
            }
            case '@croct/CROCT_SUCCESS': {
                draft.loading = false;
                draft.croct = action.payload.result;
                break;
            }
            case '@croct/USER_RETURNING': {
                draft.loading = true;
                break;
            }
            case '@croct/USER_RETURNING_RESPONSE': {
                draft.loading = false;
                draft.userIsReturning = action.payload.result;
                break;
            }
            case '@croct/GET_USER': {
                draft.loading = true;
                break;
            }

            case '@croct/GET_USER_SUCCESS': {
                draft.loading = false;
                draft.profile = action.payload.result;
                break;
            }
            case '@croct/POKEMONS_VIEWED_SUCCESS': {
                draft.loading = false;
                draft.pokemonsViewed = action.payload.pokemons;
                break;
            }
            case '@croct/POKEMONS_VIEWED_FAIL': {
                draft.loading = false;
                draft.pokemonsViewed = []
                break;
            }
            default:
        }
    });
}
