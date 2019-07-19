import React from 'react';
import PropTypes from 'prop-types';

const ContentWrapper = ({ children, className }) => (
  <div className={className}>{children}</div>
);

ContentWrapper.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.array]),
  className: PropTypes.string.isRequired,
};

export default ContentWrapper;
