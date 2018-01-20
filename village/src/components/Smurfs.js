import React, { Component } from 'react';
import axios from 'axios';

import Smurf from './Smurf';

function Smurfs(props) {
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     smurfs: [],
  //     errorMessage: '',
  //   };
  // }

  // loadSmurfs = () => {
  //   const endpoint = 'http://localhost:3333/smurfs';
  //   axios
  //     .get(endpoint)
  //     .then(response => {
  //       this.setState({ smurfs: response.data });
  //     })
  //     .catch(error => {
  //       this.setState({ errorMessage: 'Could not round up Smurfs' });
  //     });
  //   }

  // componentDidMount() {
  //   this.loadSmurfs();
  // }
  
  // render() {
  //   if (!this.props.smurfs.length) {
  //     return <h2>Well I'll be Smurfed! There's no one here.</h2>
  //   }
    return (
      <div className="Smurfs">
        <h1>Smurf Village</h1>
        <ul>
          {props.smurfs.map(smurf => {
            return <Smurf name={smurf.name} age={smurf.age} height={smurf.height} key={smurf.id} />;
          })}
        </ul>
      </div>
    );
  }

export default Smurfs;