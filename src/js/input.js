import 'babel-polyfill';
import fillingWidgets from './widgets';
import fillingCommitsTable from './latestCommits';
import fillingLatestProjects from './latestProjects';

export * from './popup';

fillingCommitsTable();
fillingWidgets();
fillingLatestProjects();
