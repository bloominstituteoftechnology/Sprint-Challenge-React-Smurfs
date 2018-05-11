import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import { Route } from "react-router-dom";
import Header from './components/Header';

class App extends Component {

  render() {
    return (
      <div className="App">
	<Header />
	<Route exact path="/" render={() => <h1>Smurf Village</h1>} />
        <Route path="/addsmurf" component={SmurfForm} />
        <Route path="/smurfs" component={Smurfs} />
      </div>
    );
  }
}

export default App;
