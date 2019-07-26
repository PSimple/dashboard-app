import React from 'react';
import PropTypes from 'prop-types';
import Link from '../../Link';
import styles from './IconItem.css';

const IconItem = ({ data }) => (
  <Link href="#" type='icon-item'>
    <img src={data.img} className={styles.icon} />
    <span className={styles.title}>{data.title}</span>
  </Link>
);

IconItem.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.sting,
    img: PropTypes.string,
  }).isRequired,
};

export default IconItem;
