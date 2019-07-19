import React from 'react';
import PropTypes from 'prop-types';
import Link from '../Link';

const PageTitle = () => (
  <header className="page-title__container">
    <h1 className="page-title__text"><span className="page-title__subtitle">overview</span>Dashboard</h1>
    <ul className="breadcrumbs">
      <li className="breadcrumbs__item">
        <Link className="breadcrumbs__item" href="#">Lint</Link>
        &nbsp;/&nbsp;
      </li>
      <li className="breadcrumbs__item">
        <Link className="breadcrumbs__item" href="#">Dashboard</Link>
        &nbsp;/&nbsp;
      </li>
      <li className="breadcrumbs__item">
        <Link className="breadcrumbs__item" href="#">Overview</Link>
      </li>
    </ul>
  </header>
);

PageTitle.propTypes = {
  children: PropTypes.element,
};

export default PageTitle;
