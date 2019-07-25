import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import styles from './BlockHeader.css';

const BlockHeader = ({ children }) => {
  const [title, ...rest] = children;
  const isString = typeof children === 'string';
  return (
    <div className={cn(styles.wrapper, styles.medium)}>
      <span className={styles.title}>{isString ? children : title}</span>
        {!isString
          ? <div className={styles.icons}>{rest}</div>
          : ''}
    </div>
  );
};

BlockHeader.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.array]).isRequired,
};

export default BlockHeader;
