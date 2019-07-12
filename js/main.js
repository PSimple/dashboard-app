const axios = require('axios');

import "babel-polyfill";

const url = 'http://www.json-generator.com/api/json/get/cqclnKfhsO?indent=2';

const controleWidgets = async () => {
  const data = await getWidgetsData();
  printData(data);
}

const getWidgetsData = async () => {
  try {
    const { data } = await axios.get(url);
    console.log(data);
    return data;
  } catch (error) {
    console.error('Data fetching error!');
    throw error
  }
}

const printData = ({ budget, operations, requests, progress }) => {
  printBudgetData(budget);
  printOperationsData(operations);
  printRequestsData(requests);
  printProgressData(progress);
};

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
  elementWithPercents.className += percents < 0 ? ' small-widgets__badge--negative'
  : ' small-widgets__badge--positive';
  setHtmlIntoElement(elementId, html);
}


const prepareBigNumbers = value => value.toString().match(/(\d+?)(?=(\d{3})+(?!\d)|$)/g);

const setHtmlIntoElement =
  (elementId, html) => document.getElementById(elementId).innerHTML = html;

controleWidgets()