import React from 'react';
import cn from 'classnames';
import styles from './Score.css';
import BlockHeader from '../BlockHeader';

import scoreChart from '../../img/score_chart.png';

const Score = () => (
  <div className={styles.container}>
    <BlockHeader title='Score' />
    <div className={cn(styles.dynamic, styles['dynamic--grow'])}><i
        className={cn(styles.icon, styles['icon--grow'])}></i>+12pts</div>
    <div className={styles.period}>THIS WEEK</div>
    <img className={styles.image} src={scoreChart} />
  </div>
);

export default Score;
