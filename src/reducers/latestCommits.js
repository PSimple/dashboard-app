import {
  SET_LATEST_COMMITS_DATA,
  TOGGLE_COMMITS_LOADER,
} from '../constants';

const initialState = {
  data: [],
  loading: false,
};

const latestCommits = (state = initialState, action) => {
  const {
    type,
    payload,
  } = action;
  switch (type) {
    case SET_LATEST_COMMITS_DATA:
      return {
        ...state,
        data: payload,
      };

    case TOGGLE_COMMITS_LOADER:
      return {
        ...state,
        loading: payload,
      };

    default:
      return state;
  }
};

export default latestCommits;
