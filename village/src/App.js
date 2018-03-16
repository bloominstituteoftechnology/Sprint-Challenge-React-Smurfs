import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import Navigation from './components/Navigation';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <Route path="/add" component={SmurfForm} />
        <Route exact path="/" component={Smurfs} />
      </div>
    );
  }
}

export default App;
