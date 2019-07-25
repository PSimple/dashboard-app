import React from 'react';
import styles from './Visitors.css';
import BlockHeader from '../BlockHeader';
import IconButton from '../IconButton';

import graph from '../../img/graph.png';

const Visitors = () => (
  <div className={styles.container}>
    <BlockHeader title='Visitors'>
      <IconButton className='info' onClick={() => {}}/>
      <IconButton className='refresh' onClick={() => {}}/>
    </BlockHeader>
    <img src={graph} />
  </div>
);

export default Visitors;
