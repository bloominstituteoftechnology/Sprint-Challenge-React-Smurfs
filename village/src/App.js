import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Smurfs from './components/Smurfs';
import IndividualSmurf from './components/IndividualSmurf';
import Header from './components/Header';
import {Route} from 'react-router-dom';
class App extends Component {
 
  render() {
    return (
      <div className="App">
        <Route exact path='/' component={Header}/>
        <Route exact path='/smurfs' render={()=>
            <Smurfs /> }/>
        <Route path='/smurfs/:id' component={IndividualSmurf}/>
      </div>
    );
  }
}

export default App;
