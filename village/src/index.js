import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import './index.css';
import App from './App';
import Header from './components/Header'

ReactDOM.render(
  <BrowserRouter>
    <div>
      <Route exact path="/" component={Header}/>
      <Route path="/smurfs" component={App}/>
    </div>
  </BrowserRouter>, 
  document.getElementById('root')
);
