import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import styles from './ContentWrapper.css';

const ContentWrapper = ({ children, leftJustify = false }) => {
  const classNames = cn(
    styles.wrapper,
    { [styles['left-justify']]: leftJustify },
  );
  return <div className={classNames}>{children}</div>;
};

ContentWrapper.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.array]),
  leftJustify: PropTypes.bool,
};

export default ContentWrapper;
