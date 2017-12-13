import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import BirdSpotReducer from './BirdSpotReducer';
import HomeReducer from './HomeReducer';
import InfoReducer from './InfoReducer';

export default combineReducers({
  auth: AuthReducer,
  bird_spot: BirdSpotReducer,
  home: HomeReducer,
  info: InfoReducer
});
