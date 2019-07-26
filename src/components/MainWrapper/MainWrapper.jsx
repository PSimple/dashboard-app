import React from 'react';
import ContentWrapper from '../ContentWrapper';
import PageTitle from '../PageTitle';
import Balance from '../Balance';
import Banner from '../Banner';
import Visitors from '../Visitors';
import Score from '../Score';
import DataCenters from '../DataCenters';
import LatestCommitsSection from '../LatestCommitsSection';
import AverageOperationTime from '../AverageOperationTime';
import styles from './MainWrapper.css';
import LatestProjectsSection from '../LatestProjectsSection';

const MainWrapper = () => (
  <main>
    <ContentWrapper>
      <PageTitle />
      <section className={styles['medium-wrapper']}>
        <Balance />
        <Visitors />
        <Score />
        <Banner />
      </section>
      <section className={styles['large-wrapper']}>
        <DataCenters />
        <LatestCommitsSection />
        <AverageOperationTime />
      </section>
      <LatestProjectsSection />
    </ContentWrapper>
  </main>
);

export default MainWrapper;
