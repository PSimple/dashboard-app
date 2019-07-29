import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import styles from './IconButton.css';

const IconButton = ({ type, onClick, ...rest }) => (
  <button
    className={cn(styles.button, styles[type])}
    onClick={onClick}
    {...rest}
  />
);

IconButton.propTypes = {
  type: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default IconButton;
