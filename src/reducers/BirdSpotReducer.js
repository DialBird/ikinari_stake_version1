import {
  REQUEST_BIRD_SPOT,
  REQUEST_BIRD_SPOT_SUCCESS,
  REQUEST_BIRD_SPOT_FAIL
} from '../actions/types';

const INITIAL_STATE = {
  initial_bird_spots: [],
  loading: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REQUEST_BIRD_SPOT:
      return { ...state, ...INITIAL_STATE, loading: true };
    case REQUEST_BIRD_SPOT_SUCCESS:
      return { ...state,
        initial_bird_spots: action.payload,
        loading: false
      };
    case REQUEST_BIRD_SPOT_FAIL:
      return { ...state, ...INITIAL_STATE };
    default:
      return state;
  }
};
