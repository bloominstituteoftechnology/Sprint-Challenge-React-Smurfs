import React, { Component } from 'react';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import RemoveSmurf from './components/RemoveSmurf';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Smurfs/>
        <SmurfForm />
        <RemoveSmurf />
      </div>
    );
  }
}

export default App;
