import React, { Component } from 'react';

import Smurf from './Smurf';
import axios from 'axios';

export default class smurfs extends Component {
  constructor() {
    super();
    this.state = {
      smurfs: []
    }
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  componentDidMount() {
    axios.get("http://localhost:3333/smurfs")
      .then(result => {
        this.setState({ smurfs: result.data })
      })
  }


  render() {
    return (
      <div className="Smurfs">
        <h1>Smurf Village</h1>
        <ul>
          { this.state.smurfs.map((smurf) => {
            return <Smurf name={smurf.name} age={smurf.age} height={smurf.height} key={smurf.id} />;
          })}
        </ul>
      </div>
    );
  }
}

