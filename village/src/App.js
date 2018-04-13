import React, { Component } from 'react';
import Smurf from './components/Smurf';
import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Smurfs/>
        <Smurf />
        <SmurfForm />
        
      </div>
    );
  }
}

export default App;
