import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import '@babel/plugin-transform-runtime';

import Navigation from '../Navigation';
import MainWrapper from '../MainWrapper';
import Footer from '../Footer';
import Header from '../Header';
import styles from './App.css';
import navLinks from '../../fixtures/navLinks';
import rootReducer from '../../reducers';

const store = createStore(rootReducer, applyMiddleware(thunk));

const App = () => (
  <div className={styles.body}>
    <Header />
    <Navigation navLinks={navLinks}/>
    <MainWrapper />
    <Footer />
  </div>
);

ReactDOM.render((
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
), document.getElementById('root'));
