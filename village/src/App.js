import React, { Component } from 'react';

import { Route } from 'react-router-dom';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path='/' component={SmurfForm} />
        <Route path='/' component={Smurfs} />
      </div>
    );
  }
}

export default App;
