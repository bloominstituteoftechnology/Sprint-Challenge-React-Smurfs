import React from 'react';
import { Route } from 'react-router-dom';
import Header from './components/Header';
import App from './App';

const Root = props => {
  return (
    <div>
      <Route exact path="/" component={Header}/>
      <Route path="/smurfs" component={App}/>
    </div>
  );
}

export default Root;
