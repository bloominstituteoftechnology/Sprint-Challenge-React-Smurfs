import React, { Component } from 'react';

import Smurf from './Smurf';
import axios from 'axios';

class Smurfs extends Component {
  constructor() {
    super();
    this.state = {
      smurfs: []
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:3333/smurfs")
      .then(response => {
        this.setState({ smurfs: response.data });
        console.log(response);
      })
      .catch(error => {
        console.log(`Error fetching Smurfs: ${error}`);
        console.log(error);
      });
  }
  
  render() {
    return (
      <div className="Smurfs">
        <h1>Smurf Village</h1>
        <ul>
          {this.props.smurfs.map(smurf => {
            return (
              <Smurf
                name={smurf.name}
                id={smurf.id}
                age={smurf.age}
                height={smurf.height}
                key={smurf.id}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Smurfs;
