import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import styles from './IconButton.css';

const IconButton = ({ className, onClick }) => (
  <button
    className={cn(styles.button, styles[className])}
    onClick={onClick}
  />
);

IconButton.propTypes = {
  className: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default IconButton;
