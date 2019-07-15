import 'babel-polyfill';
import fillingWidgets from './widgets';
import fillingCommitsTable from './latestCommits';

export * from './popup';

fillingCommitsTable();
fillingWidgets();
