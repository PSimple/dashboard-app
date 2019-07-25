import React from 'react';
import styles from './DataCenters.css';
import BlockHeader from '../BlockHeader';

const dataCenters = require('../../img/data_centers.svg');

const DataCenters = () => (
  <div className={styles.container}>
    <BlockHeader>Data Centers</BlockHeader>
    <img src={dataCenters} className={styles.image} />
  </div>
);

export default DataCenters;
