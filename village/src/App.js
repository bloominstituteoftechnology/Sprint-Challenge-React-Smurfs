import React, { Component } from 'react';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Smurfs/>
        <SmurfForm /> 
      </div>
    );
  }
}

export default App;

    //    <ul>
    //      { this.state.smurfs.map((smurf) => {
    //        return <Smurf name={smurf.name} age={smurf.age} height={smurf.height} key={smurf.id} />;
    //      })}
    //    </ul> 