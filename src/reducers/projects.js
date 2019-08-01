import {
  SET_PROJECTS_DATA,
  TOGGLE_PROJECTS_LOADER,
} from '../constants';

const initialState = {
  data: [],
  loading: false,
};

const projects = (state = initialState, action) => {
  const {
    type,
    payload,
  } = action;
  switch (type) {
    case SET_PROJECTS_DATA:
      return {
        ...state,
        data: payload,
      };

    case TOGGLE_PROJECTS_LOADER:
      return {
        ...state,
        loading: payload,
      };

    default:
      return state;
  }
};

export default projects;
