import React from 'react';
import PropTypes from 'prop-types';
import styles from './Link.css';

const Link = ({ href, children, className }) => (
  <a className={styles[className]} href={href}>{children}</a>
);

Link.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string]).isRequired,
  href: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default Link;
