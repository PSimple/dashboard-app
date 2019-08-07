import * as Actions from '../constants/actionTypes';
import repositoryService from '../services/repositoryService';

const getComponentData = (name) => {
  switch (name) {
    case 'widgets':
      return repositoryService.getWidgets();
    case 'commits':
      return repositoryService.getCommits();
    case 'projects':
      return repositoryService.getProjects();
    default:
      return null;
  }
};

const setComponentIsLoading = (componentName, isLoading) => ({
  type: Actions.SET_COMPONENT_IS_LOADING,
  payload: {
    componentName,
    isLoading,
  },
});

const setComponentData = (componentName, data) => ({
  type: Actions.SET_COMPONENT_DATA,
  payload: {
    componentName,
    data,
  },
});

const fetchComponentData = componentName => (
  (dispatch) => {
    dispatch(setComponentIsLoading(componentName, true));

    return getComponentData(componentName).then(
      data => dispatch(setComponentData(componentName, data)),
      (error) => {
        throw error;
      },
    ).finally(
      () => dispatch(setComponentIsLoading(componentName, false)),
    );
  }
);

export default fetchComponentData;
