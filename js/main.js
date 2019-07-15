import 'babel-polyfill';
import { setHtmlIntoElement, fetchData } from './serviceFunctions';
import fillingWidgets from './widgets';

const latestCommitsUrl = 'https://next.json-generator.com/api/json/get/EyfChEW-v';

const printCommitsList = (data) => {
  const html = data.reduce((acc, {
    message,
    time,
    link,
  }) => `
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
};

const printCommitsListLoader = () => {
  const rows = document.querySelectorAll('.commits-table__row');
  rows.forEach((item) => {
    item.classList.toggle('commits-table__row--loading');
  });
};

const controlLatestCommits = async () => {
  printCommitsListLoader();
  const data = await fetchData(latestCommitsUrl);
  printCommitsList(data);
};

controlLatestCommits();
fillingWidgets();

const isHidden = (el) => {
  const style = window.getComputedStyle(el);
  return (style.display === 'none');
};

const overlay = document.querySelector('.popup__overlay');

const togglePopup = (element, visibleClass) => {
  if ((overlay.style.display === 'none' || overlay.style.display === '') && isHidden(document.querySelector(element))) {
    overlay.style.display = 'block';
    overlay.addEventListener('click', () => {
      togglePopup(element, visibleClass);
    });
    document.querySelector(element).classList.add(visibleClass);
  } else {
    overlay.style.display = 'none';
    document.querySelector(element).classList.remove(visibleClass);
    overlay.removeEventListener('click', () => {});
  }
};

const buttonGrid = document.querySelector('.header__button--grid');
const buttonProfile = document.querySelector('.header__profile');

buttonGrid.addEventListener('click', () => {
  buttonGrid.classList.toggle('header__button--active');
  togglePopup('.popup__grid', 'popup--visible');
});

buttonProfile.addEventListener('click', () => {
  buttonProfile.classList.toggle('header__button--active');
  togglePopup('.popup__profile', 'popup--visible');
});

const widget = (states) => {
  document.querySelectorAll('.small-widgets__item').forEach((e) => {
    const eWidgetState = !e.classList.contains('small-widgets__item--hidden');
    if (states[e.getAttribute('data-name').toLowerCase()] !== eWidgetState) {
      e.classList.toggle('small-widgets__item--hidden');
    }
  });
};

const widgetCheckStates = {
  budget: true, operations: true, requests: true, progress: true,
};

document.querySelectorAll('.small-widgets__checkbox').forEach((e) => {
  e.addEventListener('click', (el) => {
    const elName = el.target.name;
    widgetCheckStates[elName] = !widgetCheckStates[elName];
    widget(widgetCheckStates);
  });
});
