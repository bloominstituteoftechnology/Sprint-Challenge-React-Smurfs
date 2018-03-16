import React, { Component } from 'react';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import DeleteSmurf from './components/DeleteSmurf';

class App extends Component {

  state = {
    smurfs: []
  };

  
  render() {
    return (
      <div className="App">
        <SmurfForm />
        <DeleteSmurf />
        <Smurfs/>
      </div>
    );
  }
}

export default App;
