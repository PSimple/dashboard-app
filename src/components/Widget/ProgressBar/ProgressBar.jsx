import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import styles from './ProgressBar.css';

const ProgressBar = ({ children }) => {
  let value = children;
  if (children > 100) {
    value = 100;
  } else if (children < 0) {
    value = 0;
  }

  return (
    <div className={cn(styles.progressbar, { [styles.short]: value === 100 })}>
      <span className={styles.progress} style={{ width: `${value}%` }}></span>
    </div>
  );
};

ProgressBar.propTypes = {
  children: PropTypes.number.isRequired,
};

export default ProgressBar;
