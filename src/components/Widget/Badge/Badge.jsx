import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import styles from './Badge.css';

const Badge = ({ children }) => {
  const badgeClass = cn(styles.badge, {
    [styles.negative]: children < 0,
    [styles.positive]: children > 0,
  });

  return (
    <div className={badgeClass}>{children < 0 ? children : `+${children}`}%</div>
  );
};

Badge.propTypes = {
  children: PropTypes.number.isRequired,
};

export default Badge;
