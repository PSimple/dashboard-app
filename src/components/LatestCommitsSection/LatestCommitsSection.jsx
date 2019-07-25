import React from 'react';
import LatestCommitsTable from '../LatestCommitsTable';
import styles from './LatestCommitsSection.css';
import BlockHeader from '../BlockHeader';
import IconButton from '../IconButton';
import Link from '../Link';


const LatestCommitsSection = () => (
  <div className={styles.container}>
    <BlockHeader title='Lastest Commits'>
      <IconButton className='info' onClick={() => {}}/>
      <IconButton className='refresh' onClick={() => {}}/>
    </BlockHeader>
    <LatestCommitsTable />
    <Link href="#" className='view-all'>VIEW ALL</Link>
  </div>
);

export default LatestCommitsSection;
