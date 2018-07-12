import React, { Component } from 'react';
import axios from 'axios';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';

const App = () => {
  return (
    <div className="App">
      <SmurfForm/>
      <Smurfs/>
    </div>
  )
}

export default App;
