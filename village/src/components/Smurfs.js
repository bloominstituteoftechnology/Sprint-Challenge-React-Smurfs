import React, { Component } from 'react';
import axios from 'axios';
import Smurf from './Smurf';

class Smurfs extends Component {
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  state = {
    smurfs:[{x:1}],
  }
  componentDidMount() {
    axios 
    .get('http://localhost:3333')
    .then(res => {
      console.log(res);
      this.setState(() => {smurfs: res});
    })
    .catch(error => {
        console.error(error);
    });
    console.log();
  }
  render() {
    return (
      <div className="Smurfs">
        <h1>Smurf Village</h1>
        <ul>
          { this.state.smurfs.map((smurf) => {
            return <Smurf key={smurf.id} name={smurf.name} age={smurf.age} height={smurf.height}  />;
          })}
        </ul>
      </div>
    );
  }
}

export default Smurfs;