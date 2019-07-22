import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import Navigation from './Navigation';
import MainWrapper from './MainWrapper';
import Footer from './Footer';

const App = () => (<>
  <Navigation />
  <MainWrapper />
  <Footer />
</>);

ReactDOM.render(<App />, document.getElementById('root'));
