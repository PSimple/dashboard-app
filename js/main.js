const axios = require('axios');
import "babel-polyfill";

const widgetsUrl = 'http://www.json-generator.com/api/json/get/cqclnKfhsO?indent=2';
const latestCommitsUrl = 'https://next.json-generator.com/api/json/get/EyfChEW-v';

const controleWidgets = async () => {
    printWidgetLoader();
    const {
        budget,
        operations,
        requests,
        progress
    } = await fetchData(widgetsUrl);

    printBudgetData(budget);
    printOperationsData(operations);
    printRequestsData(requests);
    printProgressData(progress);
    printWidgetLoader();
}

const printWidgetLoader = () => {
    const widgets = document.querySelectorAll('.small-widgets__item');
    widgets.forEach((item) => {
        item.classList.toggle('small-widgets__item--loading');
    })
}

const fetchData = async url => {
    try {
        const {
            data
        } = await axios.get(url);
        console.log(data);
        return data;
    } catch (error) {
        console.error('Data fetching error!');
        throw error
    }
}

const printBudgetData = data => {
    setHtmlIntoElement('budget__value', `$${prepareBigNumbers(data.value)}`);
    printPercents('budget__percents', data.percents);
}

const printRequestsData = data => {
    setHtmlIntoElement('requests__value', `${prepareBigNumbers(data.value)}`);
    printPercents('requests__percents', data.percents);
}

const printOperationsData = data => {
    setHtmlIntoElement('operations__value', prepareBigNumbers(data.value));
}

const printProgressData = data => {
    setHtmlIntoElement('progress__value', `${data.value}%`);
    document.getElementById('progress__bar').style = `width:${data.value}%`;
}

const printPercents = (elementId, percents) => {
    const html = percents < 0 ? `${percents}%` : `+${percents}%`;
    const elementWithPercents = document.getElementById(elementId);
    elementWithPercents.className += percents < 0 ? ' small-widgets__badge--negative' :
        ' small-widgets__badge--positive';
    setHtmlIntoElement(elementId, html);
}

const prepareBigNumbers = value => value.toString().match(/(\d+?)(?=(\d{3})+(?!\d)|$)/g);

const setHtmlIntoElement =
  (elementId, html) => document.getElementById(elementId).innerHTML = html;

controleWidgets()

const controlLatestCommits = async () => {
  printCommitsListLoader();
  const data = await fetchData(latestCommitsUrl);
  printCommitsList(data);
}

const printCommitsList = data => {
  const html = data.map(({ message, time, link }) => `
    <ul class="large-widgets__latest-commits__table__row">
      <li class="large-widgets__latest-commits__table__cell">${message}</li>
      <li class="large-widgets__latest-commits__table__cell--dark">${time}</li>
      <li class="large-widgets__latest-commits__table__cell icon--arrow--right"><a href=${link}><i class="right-arrow"></i></a></li>
    </ul>
  `).join('');
  setHtmlIntoElement('latest-commits-table', html);
}

const printCommitsListLoader = () => {
  const rows = document.querySelectorAll('.large-widgets__latest-commits__table__row');
  rows.forEach((item) => {
    item.classList.toggle('large-widgets__latest-commits__table__row--loading');
  })
}
controlLatestCommits();