import React from 'react';
import PropTypes from 'prop-types';
import styles from './Link.css';

const Link = ({ href, children, type }) => (
  <a className={styles[type]} href={href}>{children}</a>
);

Link.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.element),
  ]).isRequired,
  href: PropTypes.string.isRequired,
  type: PropTypes.string,
};

export default Link;
