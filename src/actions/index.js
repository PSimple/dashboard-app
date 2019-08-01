import { SET_WIDGETS_DATA, TOGGLE_LOADER, widgetsUrl } from '../constants';
import fetchData from '../functions/fetchData';

const setWidgetsData = data => ({
  type: SET_WIDGETS_DATA,
  payload: data,
});

const toggleLoader = loading => ({
  type: TOGGLE_LOADER,
  payload: loading,
});

const fetchWidgetsData = () => (
  (dispatch) => {
    dispatch(toggleLoader(true));
    return fetchData(widgetsUrl).then(
      data => dispatch(setWidgetsData(data)),
      (error) => { throw error; },
    ).finally(
      () => dispatch(toggleLoader(false)),
    );
  }
);

export { setWidgetsData, fetchWidgetsData };
