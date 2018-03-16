import React, { Component } from 'react';
import  axios  from 'axios';
import Smurf from './Smurf';

class Smurfs extends Component {
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server

componentDidMount() {
  axios
  .get('http://localhost:3333')
  .then (response => {
    this.setState(() => ({ smurfs: response.data }))
  })
  .catch(error => {
    console.error(`Server Error: ${error}`)
  });
}

  render() {
    return (
      <div className="Smurfs">
        <h1>Smurf Village</h1>
        
      </div>
    );
  }
}

export default Smurfs;