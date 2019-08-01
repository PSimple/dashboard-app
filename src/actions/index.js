import * as Actions from '../constants/actionTypes';
import * as Urls from '../constants/urls';
import fetchData from '../functions/fetchData';

const urlsTo = {
  commits: Urls.COMMITS_URL,
  widgets: Urls.WIDGETS_URL,
  projects: Urls.PROJECTS_URL,
};

const setLoadingTo = (place, isLoading) => ({
  type: Actions.SET_LOADING_TO,
  payload: {
    place,
    isLoading,
  },
});

const setDataTo = (place, data) => ({
  type: Actions.SET_DATA_TO,
  payload: {
    place,
    data,
  },
});

const fetchDataTo = place => (
  (dispatch) => {
    dispatch(setLoadingTo(place, true));
    return fetchData(urlsTo[place]).then(
      data => dispatch(setDataTo(place, data)),
      (error) => {
        throw error;
      },
    ).finally(
      () => dispatch(setLoadingTo(place, false)),
    );
  }
);

export default fetchDataTo;
