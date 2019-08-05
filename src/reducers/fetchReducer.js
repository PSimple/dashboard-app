import {
  SET_LOADING_TO,
  SET_DATA_TO,
} from '../constants/actionTypes';

const initialState = {
  widgets: {
    loading: false,
    data: [],
  },
  commits: {
    loading: false,
    data: [],
  },
  projects: {
    loading: false,
    data: [],
  },
};

const fetchReducer = (state = initialState, action) => {
  const {
    type,
    payload,
  } = action;

  switch (type) {
    case SET_LOADING_TO:
      return {
        ...state,
        [payload.place]: {
          ...state[payload.place],
          loading: payload.isLoading,
        },
      };

    case SET_DATA_TO:
      return {
        ...state,
        [payload.place]: {
          ...state[payload.place],
          data: payload.data,
        },
      };

    default:
      return state;
  }
};

export default fetchReducer;
