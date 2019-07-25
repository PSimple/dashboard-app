import React from 'react';
import LatestCommitsTable from '../LatestCommitsTable';
import styles from './LatestCommitsSection.css';
import BlockHeader from '../BlockHeader';

const LatestCommitsSection = () => (
  <div className={styles.container}>
    <BlockHeader>Lastest Commits</BlockHeader>
    <LatestCommitsTable />
    <a className={styles['footer-link']}>VIEW ALL</a>
  </div>
);

export default LatestCommitsSection;
