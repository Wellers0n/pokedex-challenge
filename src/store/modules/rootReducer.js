import { combineReducers } from 'redux';

import auth from './auth/reducer';
import pokemon from './pokemon/reducer';
import croct from './croct/reducer';


export default combineReducers({
  auth,
  pokemon,
  croct,
});
