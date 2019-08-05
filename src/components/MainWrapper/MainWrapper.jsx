import React from 'react';
import { Switch, Route } from 'react-router-dom';

import styles from './MainWrapper.css';

import AverageOperationTime from '../AverageOperationTime';
import Balance from '../Balance';
import Banner from '../Banner';
import ContentWrapper from '../ContentWrapper';
import DataCenters from '../DataCenters';
import LatestCommitsSection from '../LatestCommitsSection';
import LatestProjectsSection from '../LatestProjectsSection';
import LoginPage from '../LoginPage';
import navLinks from '../../fixtures/navLinks';
import PageTitle from '../PageTitle';
import Score from '../Score';
import Visitors from '../Visitors';
import WidgetsController from '../WidgetsController';
import Register from '../Register';

const MainWrapper = () => (
  <ContentWrapper>
    <PageTitle navLinks={navLinks}/>
    <Switch>
      <Route exact path='/' component={() => (
        <>
          <WidgetsController />
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
        </>
      )}/>
      <Route path='/widgets' component={WidgetsController}/>
      <Route path='/medium-grid' component={() => (
        <section className={styles['medium-wrapper']}>
          <Balance/>
          <Visitors/>
          <Score/>
          <Banner/>
        </section>
      )}/>
      <Route path='/large-grid' component={() => (
        <section className={styles['large-wrapper']}>
          <DataCenters />
          <LatestCommitsSection/>
          <AverageOperationTime/>
        </section>
      )}/>
      <Route path='/latest-projects' component={LatestProjectsSection}/>
<<<<<<< HEAD
      <Route path='/register' component={Register}/>
=======
      <Route path='/login' component={LoginPage}/>
>>>>>>> 3fb0b8f61f6e318f742a33d9912e017a7f0833eb
    </Switch>
  </ContentWrapper>
);

export default MainWrapper;
