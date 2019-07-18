import { setHtmlIntoElement, fetchData } from './serviceFunctions';

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
  setHtmlIntoElement(document.getElementById('latest-commits-table'), html);
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

export default controlLatestCommits;
