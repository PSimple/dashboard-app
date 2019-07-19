import React from 'react';
import PropTypes from 'prop-types';
import ContentWrapper from '../ContentWrapper';
import PageTitle from '../PageTitle';

const Main = () => (
  <main className="main-wrapper">
    <ContentWrapper className="page-title">
      <PageTitle></PageTitle>
    </ContentWrapper>
    <ContentWrapper className="small-widgets__controller">
    </ContentWrapper>
  </main>
);

Main.propTypes = {
  children: PropTypes.element,
};

export default Main;
