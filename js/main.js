import 'babel-polyfill';
import fillingWidgets from './widgets';
import fillingCommitsTable from './latestCommits';

export * from './popup';

fillingCommitsTable();
fillingWidgets();

const widget = (states) => {
  document.querySelectorAll('.small-widgets__item').forEach((e) => {
    const eWidgetState = !e.classList.contains('small-widgets__item--hidden');
    if (states[e.getAttribute('data-name').toLowerCase()] !== eWidgetState) {
      e.classList.toggle('small-widgets__item--hidden');
    }
  });
};

const widgetCheckStates = {
  budget: true,
  operations: true,
  requests: true,
  progress: true,
};

document.querySelectorAll('.small-widgets__checkbox').forEach((e) => {
  e.addEventListener('click', (element) => {
    const elementName = element.target.name;
    widgetCheckStates[elementName] = !widgetCheckStates[elementName];
    widget(widgetCheckStates);
  });
});
