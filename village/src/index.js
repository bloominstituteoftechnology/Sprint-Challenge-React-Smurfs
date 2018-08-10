import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import Header from './components/Header';

ReactDOM.render(
  <Router>
    <div>
      <Route exact path="/" component={Header} />
      <Route path="/smurfs" component={App} />
    </div>
  </Router>, document.getElementById('root'));
