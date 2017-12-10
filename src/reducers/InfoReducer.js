import {
  REQUEST_INFO,
  REQUEST_INFO_SUCCESS,
  REQUEST_INFO_FAIL,
  SEARCH_TEXT_CHANGED
} from '../actions/types';

const INITIAL_STATE = {
  initial_info: [],
  filterd_info: [],
  loading: false,
  searchText: ''
};

const filterInfo = (searchText, info) => {
  const text = searchText.toLowerCase();
  const filterd = info.filter(item => {
    return item.title.toLowerCase().match(text);
  });
  return filterd;
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REQUEST_INFO:
      return { ...state, ...INITIAL_STATE, loading: true };
    case REQUEST_INFO_SUCCESS:
      return { ...state,
        initial_info: action.payload,
        filterd_info: filterInfo(state.searchText, action.payload),
        loading: false
      };
    case REQUEST_INFO_FAIL:
      return { ...state, ...INITIAL_STATE };
    case SEARCH_TEXT_CHANGED:
      return { ...state,
        searchText: action.payload,
        filterd_info: filterInfo(state.searchText, action.payload)
      };
    default:
      return state;
  }
};
