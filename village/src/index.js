import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './index.css';
import Header from './components/Header';
import App from './App';

ReactDOM.render(
  <Router>
    <div>
      <Route exact path='/' component={Header} />
      <Route exact path='/smurfz' component={App} />
    </div>
  </Router>, 
  document.getElementById('root'));
