import {
  setHtmlIntoElement,
  fetchData,
} from './serviceFunctions';

const widgetsUrl = 'http://www.json-generator.com/api/json/get/cqclnKfhsO?indent=2';

const prepareBigNumbers = value => value.toString().match(/(\d+?)(?=(\d{3})+(?!\d)|$)/g);

const printWidgetLoader = () => {
  const widgets = document.querySelectorAll('.small-widgets__item');
  widgets.forEach((item) => {
    item.classList.toggle('small-widgets__item--loading');
  });
};

const printPercents = (elementId, percents) => {
  const html = percents < 0 ? `${percents}%` : `+${percents}%`;
  const elementWithPercents = document.getElementById(elementId);
  elementWithPercents.className += percents < 0 ? ' small-widgets__badge--negative'
    : ' small-widgets__badge--positive';
  setHtmlIntoElement(document.getElementById(elementId), html);
};

const printBudgetData = (data) => {
  setHtmlIntoElement(document.getElementById('budget__value'), `$${prepareBigNumbers(data.value)}`);
  printPercents('budget__percents', data.percents);
};

const printRequestsData = (data) => {
  setHtmlIntoElement(document.getElementById('requests__value'), `${prepareBigNumbers(data.value)}`);
  printPercents('requests__percents', data.percents);
};

const printOperationsData = (data) => {
  setHtmlIntoElement(document.getElementById('operations__value'), prepareBigNumbers(data.value));
};

const printProgressData = (data) => {
  setHtmlIntoElement(document.getElementById('progress__value'), `${data.value}%`);
  document.getElementById('progress__bar').style = `width:${data.value}%`;
};


const fillingWidgets = async () => {
  printWidgetLoader();
  const {
    budget,
    operations,
    requests,
    progress,
  } = await fetchData(widgetsUrl);

  printBudgetData(budget);
  printOperationsData(operations);
  printRequestsData(requests);
  printProgressData(progress);
  printWidgetLoader();
};

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

export default fillingWidgets;
