import { SET_WIDGETS_DATA, TOGGLE_LOADER } from '../constants';

const initialState = {
  data: [],
  loading: false,
};

const widgets = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_WIDGETS_DATA:
      return {
        ...state,
        data: payload,
      };

    case TOGGLE_LOADER:
      return {
        ...state,
        loading: payload,
      };

    default:
      return state;
  }
};

export default widgets;
