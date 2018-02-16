import React, { Component } from 'react';
// import axios from 'axios';
import Smurf from './Smurf';

class Smurfs extends Component {
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // state = {
  //   smurfs: [],
  // }

  // componenentDidMount() {
  //   axios.get('http://localhost:3333/smurfs')
  //   .then((response) => {
  //     this.setState({ smurfs: response });
  //   })
  //   .catch((err) => {
  //     console.error('Error', err);
  //   })
  // }

  render() {
    return (
      <div className="Smurfs">
        <h1>Smurf Village</h1>
        <ul>
          { this.props.smurfs.map((smurf) => {
            return <Smurf name={smurf.name} age={smurf.age} height={smurf.height} key={smurf.id} />;
          })}
        </ul>
      </div>
    );
  }
}

export default Smurfs;