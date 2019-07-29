import React from 'react';
import BlockHeader from '../BlockHeader';
import IconButton from '../IconButton';
import styles from './Balance.css';

const Balance = () => (
  <div className={styles.container}>
    <BlockHeader title='Balance'>
      <IconButton type='info' onClick={() => {}}/>
      <IconButton type='refresh' onClick={() => {}}/>
    </BlockHeader>
    <div className={styles.sum}>
      $183,927
    </div>
    <div className={styles.stats}>
      <div className={styles.column}>
        Last Month
        <span className={styles.stat}>$120,124</span>
      </div>
      <div className={styles.column}>
        This Month
        <span className={styles.stat}>$203,890</span>
      </div>
    </div>
    <div className={styles.dynamic}>
      + 23,91%
    </div>
  </div>
);

export default Balance;
