import { setHtmlIntoElement, fetchData } from './serviceFunctions';

const latestProjectsUrl = 'https://next.json-generator.com/api/json/get/4yPpwUB-P';

const statuses = {
  0: 'Canceled',
  1: 'Started',
  2: 'Pending',
  3: 'Completed',
};

const printProjectsList = (data) => {
  const html = data.reduce((acc, {
    photoUrl,
    name,
    project,
    startDate,
    endDate,
    status,
  }) => `
    ${acc}
    <ul class="projects-table__row projects-table__row--loading"">
      <li class="projects-table__cell">
        <span class="name">
          <img src="${photoUrl}" class="profile-icon"/>
          ${name}
        </span>
      </li>
      <li class="projects-table__cell">${project}</li>
      <li class="projects-table__cell">${startDate}</li>
      <li class="projects-table__cell">${endDate}</li>
      <li class="projects-table__cell projects-table__cell--${statuses[status].toLowerCase()}">${statuses[status]}</li>
    </ul>
  `,
  `
  <ul class="projects-table__head">
    <li class="projects-table__cell">Name</li>
    <li class="projects-table__cell">Project</li>
    <li class="projects-table__cell">Start Date</li>
    <li class="projects-table__cell">End Date</li>
    <li class="projects-table__cell">Status</li>
  </ul>
  `);
  setHtmlIntoElement('projects-table', html);
};

const printProjectsListLoader = () => {
  const rows = [...document.querySelectorAll('.projects-table__row')];
  const html = rows.reduce(acc => `
    ${acc}
    <ul class="projects-table__row projects-table__row--loading"">
      <li class="projects-table__cell">
        <div class="preloader preloader--profile">
        </div>
        <div class="preloader preloader--name">
        </div>
      </li>
      <li class="projects-table__cell">
        <div class="preloader preloader--project">
        </div>
      </li>
      <li class="projects-table__cell">
        <div class="preloader preloader--short">
        </div>
      </li>
      <li class="projects-table__cell">
        <div class="preloader preloader--short">
        </div>
      </li>
      <li class="projects-table__cell">
        <div class="preloader preloader--short">
        </div>
      </li>
    </ul>
    `,
  `
    <ul class="projects-table__head">
      <li class="projects-table__cell">Name</li>
      <li class="projects-table__cell">Project</li>
      <li class="projects-table__cell">Start Date</li>
      <li class="projects-table__cell">End Date</li>
      <li class="projects-table__cell">Status</li>
    </ul>
    `);
  setHtmlIntoElement('projects-table', html);
};

const controlLatestProjects = async () => {
  printProjectsListLoader();
  const data = await fetchData(latestProjectsUrl);
  printProjectsList(data);
};

export default controlLatestProjects;
