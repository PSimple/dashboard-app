import React from 'react';
import ReactDOM from 'react-dom';
import Navigation from './Navigation/Navigation';
import Main from './Main/Main';
import Footer from './Footer/Footer';

const App = () => (<>
  <Navigation />
  <Main />
  <Footer />
</>);

ReactDOM.render(<App />, document.getElementById('root'));
