import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import '@babel/plugin-transform-runtime';
import Navigation from '../Navigation';
import MainWrapper from '../MainWrapper';
import Footer from '../Footer';
import Header from '../Header';
import styles from './App.css';
import navLinks from '../../fixtures/navLinks';

const App = () => (
  <div className={styles.body}>
    <Header />
    <Navigation navLinks={navLinks}/>
    <MainWrapper />
    <Footer />
  </div>
);

ReactDOM.render((
  <BrowserRouter>
    <App />
  </BrowserRouter>
), document.getElementById('root'));
