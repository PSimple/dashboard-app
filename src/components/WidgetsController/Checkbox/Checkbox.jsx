import React from 'react';
import PropTypes from 'prop-types';
import styles from './Checkbox.css';

const Checkbox = ({ label, selected, handleChange }) => (
  <>
    <label htmlFor={label} >{label}</label>
    <input
      id={label}
      type="checkbox"
      checked={selected}
      onChange={handleChange}
      className={styles.icon}
    />
  </>
);

Checkbox.propTypes = {
  label: PropTypes.string.isRequired,
  selected: PropTypes.bool.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default Checkbox;
