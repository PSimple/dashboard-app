import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import styles from './Loader.css';

const Loader = ({ type }) => (
  <div className={cn(styles.loader, styles[type])}/>
);

Loader.propTypes = {
  type: PropTypes.string.isRequired,
};


export default Loader;
