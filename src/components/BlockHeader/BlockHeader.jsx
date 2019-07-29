import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import styles from './BlockHeader.css';

const BlockHeader = ({ children, title }) => (
  <div className={cn(styles.wrapper, styles.medium)}>
    <span className={styles.title}>{title}</span>
    <div className={styles.icons}>{children}</div>
  </div>
);

BlockHeader.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.element]),
  title: PropTypes.string.isRequired,
};

export default BlockHeader;
