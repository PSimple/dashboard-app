import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import ContentWrapper from '../ContentWrapper';
import styles from './Navigation.css';

const Navigation = ({ navLinks }) => (
  <nav className={styles.navigation}>
    <ContentWrapper leftJustify flex>
      {navLinks.map(link => (
        <NavLink
          key={link.title}
          to={link.route}
          exact
          className={styles.navlink}
          activeClassName={styles.active}
        >
          {link.title}
        </NavLink>
      ))}
    </ContentWrapper>
  </nav>
);

Navigation.propTypes = {
  navLinks: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
};

export default Navigation;
