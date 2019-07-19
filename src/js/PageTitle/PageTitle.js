import React from 'react';
import PropTypes from 'prop-types';
import Link from '../Link';

const linksData = [
  {
    title: 'Lint',
    href: '#',
  },
  {
    title: 'Dashboard',
    href: '#',
  },
  {
    title: 'Overview',
    href: '#',
  },
];

const PageTitle = () => (
  <header className="page-title__container">
    <div>
      <span className="page-title__subtitle">overview</span>
      <h1 className="page-title__text">Dashboard</h1>
    </div>
    <ul className="breadcrumbs">
      {linksData.map(item => (
        <li key={item.title} className="breadcrumbs__item">
          <Link href={item.href}>{item.title}</Link>
        </li>
      ))}
    </ul>
  </header>
);

PageTitle.propTypes = {
  children: PropTypes.element,
};

export default PageTitle;
