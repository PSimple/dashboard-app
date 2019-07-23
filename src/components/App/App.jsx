import React from 'react';
import ReactDOM from 'react-dom';
import Navigation from '../Navigation';
import MainWrapper from '../MainWrapper';
import Footer from '../Footer';
import Header from '../Header';
import styles from './App.css';

const App = () => (
  <div className={styles.body}>
    <Header />
    <Navigation />
    <MainWrapper />
    <Footer />
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));
