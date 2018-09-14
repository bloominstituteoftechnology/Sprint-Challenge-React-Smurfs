import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Header from './components/Header';

ReactDOM.render(
  <Router>
    <React.Fragment>
      <Route path="/" component={Header} />
    </React.Fragment>
  </Router>, 
  document.getElementById('root'));
