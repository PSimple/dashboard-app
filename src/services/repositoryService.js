import * as routes from '../constants/routes';
import clientApi from './clientApi';

export default {
  getWidgets() {
    return clientApi.get(routes.WIDGETS_ROUTE);
  },
  getCommits() {
    return clientApi.get(routes.COMMITS_ROUTE);
  },
  getProjects() {
    return clientApi.get(routes.PROJECTS_ROUTE);
  },
};
