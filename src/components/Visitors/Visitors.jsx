import React from 'react';
import styles from './Visitors.css';
import BlockHeader from '../BlockHeader';

const graph = require('../../img/graph.png');

const Visitors = () => (
  <div className={styles.container}>
    <BlockHeader>Visitors</BlockHeader>
    <img src={graph} />
  </div>
);

export default Visitors;
