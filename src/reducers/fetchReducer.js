import {
  SET_COMPONENT_IS_LOADING,
  SET_COMPONENT_DATA,
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
    case SET_COMPONENT_IS_LOADING:
      return {
        ...state,
        [payload.componentName]: {
          ...state[payload.componentName],
          loading: payload.isLoading,
        },
      };

    case SET_COMPONENT_DATA:
      return {
        ...state,
        [payload.componentName]: {
          ...state[payload.componentName],
          data: payload.data,
        },
      };

    default:
      return state;
  }
};

export default fetchReducer;
