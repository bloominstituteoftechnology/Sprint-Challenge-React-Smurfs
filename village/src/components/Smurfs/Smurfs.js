import React, { Component } from 'react';
import axios from 'axios';

import Smurf from '../Smurf/Smurf';
import './Smurfs.css';

class Smurfs extends Component {
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  constructor() {
    super();
    this.state = {
      smurfs: []
    };
  }

  render() {
    return (
      <div className="Smurfs">
        <div className="smurfsTitle">Smurf Village</div>
        <ul className="smurfsGrid">
          {this.state.smurfs.map(smurf => {
            return (
              <div key={smurf.id} className="smurfSmurf">
                <Smurf
                  name={smurf.name}
                  age={smurf.age}
                  height={smurf.height}
                  key={smurf.id}
                />
              </div>
            );
          })}
        </ul>
      </div>
    );
  }

  componentDidMount() {
    axios
      .get('http://localhost:3333/smurfs')
      .then(response => {
        this.setState({ smurfs: response.data });
      })
      .catch(error => {
        console.log(`There was an error GETting smurfs: ${error}`);
      });
  }
}

export default Smurfs;
