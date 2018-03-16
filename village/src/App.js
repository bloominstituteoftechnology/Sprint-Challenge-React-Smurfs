import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SmurfForm />
        <Smurfs/>
        <Route exact path="/" component={SmurfForm} />
        <Route path="/add" component={Smurf} />
      </div>
    );
  }
}

export default App;
