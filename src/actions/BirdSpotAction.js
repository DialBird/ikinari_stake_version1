import {
  REQUEST_BIRD_SPOT,
  REQUEST_BIRD_SPOT_SUCCESS,
  REQUEST_BIRD_SPOT_FAIL
} from './types';
import { getBirdSpot } from '../request';

export const initializeBirdSpot = () => {
  return (dispatch) => {
    dispatch({ type: REQUEST_BIRD_SPOT });
    getBirdSpot()
      .then(res => {
        dispatch({ type: REQUEST_BIRD_SPOT_SUCCESS, payload: res.data });
      })
      .catch(err => {
        alert('request info Err: ' + err);
        dispatch({ type: REQUEST_BIRD_SPOT_FAIL });
      });
  };
};
