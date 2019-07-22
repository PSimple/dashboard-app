import React from 'react';
import ContentWrapper from '../ContentWrapper';
import PageTitle from '../PageTitle';
import MediumGrid from './MediumGrid';
import LargeGrid from './LargeGrid';

const MainWrapper = () => (
  <main>
    <ContentWrapper>
      <PageTitle />
      <MediumGrid />
      <LargeGrid />
    </ContentWrapper>
  </main>
);

export default MainWrapper;
