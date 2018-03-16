import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import './App.css';
import SmurfForm from '../SmurfForm/SmurfForm';
import Smurfs from '../Smurfs/Smurfs';
import Navigation from '../Navigation/Navigation';

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
