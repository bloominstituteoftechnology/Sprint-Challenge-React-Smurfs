import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink
} from "react-router-dom";

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import Header from './components/Header/Header';
import Home from './components/Home/Home';

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="App">
        <Header />
        <ul>
          <li><NavLink exact to="/" className="nav-text">Home</NavLink></li>
          <li><NavLink to="/village/" className="nav-text">Go to village!</NavLink></li>
          <li><NavLink to="/add-smurf/" className="nav-text">Create your smurf!</NavLink></li>
        </ul>

        <Route exact path="/" component={Home} />
        <Route exact path="/village/" component={Smurfs} />
        <Route exact path="/add-smurf/" component={SmurfForm} /> 
      </div>
    );
  }
}

export default App;
