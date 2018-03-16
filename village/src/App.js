import React, { Component } from 'react';

import './App.css';
import SmurfForm from './components/SmurfForm';
import smurfs from './components/Smurfs';
import Smurfs from './components/Smurfs';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SmurfForm />
        <smurfs />
        <Smurfs /> 
      </div>
    );
  }
}

export default App;
