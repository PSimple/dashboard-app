import { combineReducers } from 'redux';
import widgets from './widgets';
import latestCommits from './latestCommits';
import projects from './projects';

export default combineReducers({
  widgets,
  latestCommits,
  projects,
});
