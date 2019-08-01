import {
  TOGGLE_LOADER,
  TOGGLE_COMMITS_LOADER,
  TOGGLE_PROJECTS_LOADER,
  SET_WIDGETS_DATA,
  SET_LATEST_COMMITS_DATA,
  SET_PROJECTS_DATA,
  latestCommitsUrl,
  widgetsUrl,
  projectsUrl,
} from '../constants';
import fetchData from '../functions/fetchData';

const setWidgetsData = data => ({
  type: SET_WIDGETS_DATA,
  payload: data,
});

const setLatestCommitsData = data => ({
  type: SET_LATEST_COMMITS_DATA,
  payload: data,
});

const setProjectsData = data => ({
  type: SET_PROJECTS_DATA,
  payload: data,
});

const toggleLoader = loading => ({
  type: TOGGLE_LOADER,
  payload: loading,
});

const toggleCommitsLoader = loading => ({
  type: TOGGLE_COMMITS_LOADER,
  payload: loading,
});

const toggleProjectsLoader = loading => ({
  type: TOGGLE_PROJECTS_LOADER,
  payload: loading,
});

const fetchWidgetsData = () => (
  (dispatch) => {
    dispatch(toggleLoader(true));
    return fetchData(widgetsUrl).then(
      data => dispatch(setWidgetsData(data)),
      (error) => {
        throw error;
      },
    ).finally(
      () => dispatch(toggleLoader(false)),
    );
  }
);

const fetchLatestCommitsData = () => (
  (dispatch) => {
    dispatch(toggleCommitsLoader(true));
    return fetchData(latestCommitsUrl).then(
      data => dispatch(setLatestCommitsData(data)),
      (error) => {
        throw error;
      },
    ).finally(
      () => dispatch(toggleCommitsLoader(false)),
    );
  }
);

const fetchProjectsData = () => (
  (dispatch) => {
    dispatch(toggleProjectsLoader(true));
    return fetchData(projectsUrl).then(
      data => dispatch(setProjectsData(data)),
      (error) => {
        throw error;
      },
    ).finally(
      () => dispatch(toggleProjectsLoader(false)),
    );
  }
);

export {
  fetchWidgetsData,
  fetchLatestCommitsData,
  fetchProjectsData,
};
