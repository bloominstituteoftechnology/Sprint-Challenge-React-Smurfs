import React from 'react';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';

const App = () => {
  return (
    <div className="App">
      <h1 className="App__h1">SMURF VILLAGE</h1>
      <SmurfForm/>
      <Smurfs/>
    </div>
  )
}

export default App;
