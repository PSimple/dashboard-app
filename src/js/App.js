import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import Navigation from './Navigation/Navigation';
import Main from './Main/Main';
import Footer from './Footer/Footer';

const App = () => (<Fragment>
    <Navigation></Navigation>
    <Main></Main>
    <Footer></Footer>
  </Fragment>);

ReactDOM.render(<App />, document.getElementById('root'));
