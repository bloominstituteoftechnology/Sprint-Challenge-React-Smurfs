import React, { Component } from 'react';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import axios from 'axios';  

class App extends Component {
  render() {
    return (
      <div className="App">
        <SmurfForm exact path="/" component= { SmurfForm } />
        <Smurfs exact path="/smurfs/:id" component={ Smurgs} />>
      </div>
    );
  }
}

export default App;
