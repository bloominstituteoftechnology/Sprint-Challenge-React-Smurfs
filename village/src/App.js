import React, { Component } from 'react';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';

class App extends Component {

  state = {
    smurfs: []
  };

  
  render() {
    return (
      <div className="App">
        <SmurfForm />
        <Smurfs/>
      </div>
    );
  }
}

export default App;
