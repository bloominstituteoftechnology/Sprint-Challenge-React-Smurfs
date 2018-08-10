import React, { Component } from 'react';
import { Route } from "react-router-dom";

import './App.css';
import Header from './components/Header';
import Village from './components/Village';

 class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={Header} />
        <Route exact path="/smurfs" component={Village} />
      </div>
    );
  }
}

export default App;

