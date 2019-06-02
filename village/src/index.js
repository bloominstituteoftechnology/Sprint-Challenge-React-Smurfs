import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';


import './index.css';
import App from './App';

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/smurfs" component={App} />
    </Switch>
  </Router>,
  document.getElementById('root'));
