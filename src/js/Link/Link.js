import React from 'react';
import PropTypes from 'prop-types';

const Link = ({ href, children, className }) => (
  <a className={className} href={href}>{children}</a>
);

Link.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string]).isRequired,
  href: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};

export default Link;
