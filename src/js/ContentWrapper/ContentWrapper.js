import React from 'react';
import PropTypes from 'prop-types';

const ContentWrapper = ({ children, className = '' }) => {
  const classNames = `content-wrapper ${className}`;
  return <div className={classNames}>{children}</div>;
};

ContentWrapper.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.array]),
  className: PropTypes.string.isRequired,
};

export default ContentWrapper;
