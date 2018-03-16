import React, { Component } from 'react';
import axios from 'axios';
import Smurfs from './Smurfs';

class Smurfs extends Component {
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  state = {
    name: '',
    age: '',
    height: ''
  };

  
  
  render() {
    return (
      <div className="Smurfs">
        <h1>Smurf Village</h1>
        <ul>
          { this.state.smurfs.map((smurfs) => {
            return <Smurfs name={smurfs.name} age={smurfs.age} height={smurfs.height} key={smurfs.id} />;
          })}
        </ul>
      </div>
    );
  }
}

export default Smurfs;