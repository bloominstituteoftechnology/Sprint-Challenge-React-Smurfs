import React, { Component } from 'react';
import Smurf from './Smurf';
import SmurfForm from './SmurfForm';
import axios from 'axios';

class Smurfs extends Component {
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  state = {
    smurfs: [],
  }
    
  render() {
    return (
      <div className="Smurfs">
        <h1>Smurf Village</h1>
        <ul>
          { this.state.smurfs.map((smurf) => {
            return <Smurf name={smurf.name} age={smurf.age} height={smurf.height} key={smurf.id} />;
          })}
          <SmurfForm />
        </ul>
      </div>
    );
  }

  handleName = (event) => {
    event.preventDefault();
    this.setState({
        name: event.target.name });
  }

  handleAge = (event) => {
    event.preventDefault();
    this.setState({
        age: event.target.age });
  }

  handleHeight = (event) => {
    event.preventDefault();
    this.setState({
        height: event.target.height });
  }


}

export default Smurfs;