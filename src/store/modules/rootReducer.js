import { combineReducers } from 'redux';

import auth from './auth/reducer';
import pokemon from './pokemon/reducer';

export default combineReducers({
  auth,
  pokemon,
});
