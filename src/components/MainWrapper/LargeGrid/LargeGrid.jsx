import React from 'react';
import DataCenters from '../../DataCenters';
import LatestCommitsSection from '../../LatestCommitsSection';
import AverageOperationTime from '../../AverageOperationTime';

const LargeGrid = () => (
  <section className="large-widgets">
    <DataCenters />
    <LatestCommitsSection />
    <AverageOperationTime />
  </section>
);

export default LargeGrid;
