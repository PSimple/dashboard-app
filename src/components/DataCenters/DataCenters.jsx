import React from 'react';
import styles from './DataCenters.css';
import BlockHeader from '../BlockHeader';
import IconButton from '../IconButton';

import dataCenters from '../../img/data_centers.svg';

const DataCenters = () => (
  <div className={styles.container}>
    <BlockHeader title='Data Centers'>
      <IconButton type='info' onClick={() => {}}/>
      <IconButton type='refresh' onClick={() => {}}/>
    </BlockHeader>
    <img src={dataCenters} className={styles.image} />
  </div>
);

export default DataCenters;
