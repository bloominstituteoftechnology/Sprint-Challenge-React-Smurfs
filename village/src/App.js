import React, { Component } from 'react';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import Smurf from './components/Smurf';
import { Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1> Smurf Village </h1>
        <Route exact path="/" component={ Smurfs }/>
        <Route path="/addSmurf" component={ SmurfForm }/>
        <Route path="/smurfs/:id" component={ Smurf }/>
         
      </div>
    );
  }
}

export default App;

   