<<<<<<< HEAD
import axios from 'axios';
=======
const axios = require('axios');
>>>>>>> 7c1062e9dff6a16c9bcc493249406820863c62e1
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


const controlLatestCommits = async () => {
  printCommitsListLoader();
  const data = await fetchData(latestCommitsUrl);
  printCommitsList(data);
}

const printCommitsList = data => {
  const html = data.reduce((acc, { message, time, link }) => `
    ${acc}
    <ul class="commits-table__row">
      <li class="commits-table__cell commits-table__cell--message">${message}</li>
      <li class="commits-table__cell commits-table__cell--time">${time}</li>
      <li class="commits-table__cell commits-table__cell--icon-arrow-right">
        <a class="cell-link" href=${link}><i class="right-arrow"></i></a>
      </li>
    </ul>
  `, '');
  setHtmlIntoElement('latest-commits-table', html);
}

const printCommitsListLoader = () => {
  const rows = document.querySelectorAll('.commits-table__row');
  rows.forEach((item) => {
    item.classList.toggle('commits-table__row--loading');
  })
}

controlLatestCommits();
controleWidgets();

const isHidden = (el) => {
  const style = window.getComputedStyle(el);
  return (style.display === 'none');
}

const togglePopup = (element, visibleClass) => {

  if (overlay.style.display === "none" || overlay.style.display === "" && isHidden(document.querySelector(element))) {
    overlay.style.display = "block";
    overlay.addEventListener('click', function (e) {
      togglePopup(element, visibleClass);
    });
    document.querySelector(element).classList.add(visibleClass); 
  } else {
    overlay.style.display = "none";
    document.querySelector(element).classList.remove(visibleClass);
    overlay.removeEventListener('click', () => {});
  }
}

const overlay = document.querySelector('.popup__overlay');
const buttonGrid = document.querySelector('.header__button--grid');
const buttonProfile = document.querySelector('.header__profile');

buttonGrid.addEventListener("click", (e) => {
  buttonGrid.classList.toggle('header__button--active');
  togglePopup('.popup__grid', 'popup--visible');
});

buttonProfile.addEventListener("click", (e) => {
  buttonProfile.classList.toggle('header__button--active');
  togglePopup('.popup__profile', 'popup--visible');
});

const widget = (states) => {
  document.querySelectorAll('.small-widgets__item').forEach((e) => {
    let eWidgetState = !e.classList.contains('small-widgets__item--hidden');
    if (states[e.getAttribute('data-name').toLowerCase()] != eWidgetState) {
      e.classList.toggle('small-widgets__item--hidden');
    }
  })
}

const widgetCheckStates = {
  'budget': 1,
  'operations': 1,
  'requests': 1,
  'progress': 1
}

document.querySelectorAll('.small-widgets__checkbox').forEach((e) => {
  e.addEventListener('click', (el) => {
    const elName = el.target.name;
    widgetCheckStates[elName] = !widgetCheckStates[elName];
    widget(widgetCheckStates);
  });
})

