import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './PageTitle.css';

import filterByLocation from './filterByLocation.jsx';

const PageTitle = ({ title, navLinks }) => (
  <section className={styles.title}>
    <header className={styles.container}>
      <div>
        <span className={styles.subtitle}>overview</span>
        <h1 className={styles.text}>{title}</h1>
      </div>
      <ul className={styles.breadcrumbs}>
        {navLinks.map(link => (
          <li key={link.title} className={styles.item}>
            <Link
              to={link.route}
              className={styles.navlink}
            >
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
    </header>
  </section>
);

PageTitle.propTypes = {
  title: PropTypes.string,
  navLinks: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
};

export default filterByLocation(PageTitle);
