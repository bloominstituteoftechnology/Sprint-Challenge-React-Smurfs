import React from 'react';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import {BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import { NavLink } from 'react-router-dom';

const App = () => (
  <Router>
    <div className="App">
      <nav>
        <NavLink to='/smurf-form'>Add Smurf</NavLink>
        <NavLink to='/'>Home</NavLink>
      </nav>
      <Route exact path='/' component={Smurfs} /> 
      <Route path='/smurf-form' component={SmurfForm} />
    </div>
  </Router>
)

export default App