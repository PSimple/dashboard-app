import React from 'react';
import styles from './LatestProjectsSection.css';
import BlockHeader from '../BlockHeader';
import IconButton from '../IconButton';
import LatestProjectsTable from '../LatestProjectsTable';
import image from '../../img/profile.png';


const LatestProjectsSection = () => (
  <section className={styles.container}>
    <BlockHeader title='Latest Projects'>
      <IconButton type='more' onClick={() => {}}/>
    </BlockHeader>
    <LatestProjectsTable image={image} />
    <div className={styles.nav}>
      <div className={styles.pages}>1 IN 15 PAGES</div>
      <div className={styles.panel}>
        <button className={styles.button} disabled>PREVIOUS ENTRIES</button>
        <button className={styles.button}>NEXT ENTRIES</button>
      </div>
    </div>
  </section>
);

export default LatestProjectsSection;
