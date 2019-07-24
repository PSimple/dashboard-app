import React from 'react';
import Balance from '../Balance';
import Banner from '../Banner';
import Visitors from '../Visitors';
import Score from '../Score';

const MediumGrid = () => (
  <section className="medium-widgets">
    <Balance />
    <Visitors />
    <Score />
    <Banner />
  </section>
);

export default MediumGrid;
