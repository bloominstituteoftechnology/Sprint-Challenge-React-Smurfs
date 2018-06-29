import React from 'react';
import { Route } from 'react-router-dom';
import App from './App';
import Header from './components/Header';

const Root = () => {
  return (
    <div>
      <Route exact path="/" component={Header} />
      <Route path="/smurfs" component={App} />
    </div>
  );
};

export default Root;
