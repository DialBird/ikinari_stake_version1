import {
  REQUEST_INFO,
  REQUEST_INFO_SUCCESS,
  REQUEST_INFO_FAIL,
  SEARCH_TEXT_CHANGED
} from './types';
import { getInfo } from '../request';

export const initializeInfo = () => {
  return (dispatch) => {
    dispatch({ type: REQUEST_INFO });
    getInfo()
      .then(res => {
        dispatch({ type: REQUEST_INFO_SUCCESS, payload: res.data });
      })
      .catch(err => {
        alert('request info Err: ' + err);
        dispatch({ type: REQUEST_INFO_FAIL });
      });
  };
};

export const searchTextChanged = (searchText) => {
  return (dispatch) => {
    dispatch({ type: SEARCH_TEXT_CHANGED, payload: searchText });
  };
};
