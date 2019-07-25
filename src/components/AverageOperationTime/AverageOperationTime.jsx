import React from 'react';
import cn from 'classnames';
import styles from './AverageOperationTime.css';

const AverageOperationTime = () => (
  <div className={styles.container}>
    <div className={styles.title}>
      Average Operation Time
    </div>
    <div className={styles.data}>
      <div className={styles.col}>
        <div className={cn(styles.item, styles.read)}>
          <span className={styles.label}>Read</span>
          <span className={styles.value}>5.32 ms</span>
        </div>
        <div className={cn(styles.item, styles.write)}>
          <span className={styles.label}>Write</span>
          <span className={styles.value}>15.32 ms</span>
        </div>
      </div>
      <div className={styles.col}>
        <div className={cn(styles.item, styles.upload)}>
          <span className={styles.label}>Upload</span>
          <span className={styles.value}>5.3 gbs</span>
        </div>
        <div className={cn(styles.item, styles.download)}>
          <span className={styles.label}>Download</span>
          <span className={styles.value}>1.2 gbs</span>
        </div>
      </div>
    </div>
  </div>
);

export default AverageOperationTime;
