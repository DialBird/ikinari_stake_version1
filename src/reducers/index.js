import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import HomeReducer from './HomeReducer';
import InfoReducer from './InfoReducer';

export default combineReducers({
  auth: AuthReducer,
  home: HomeReducer,
  info: InfoReducer
});
