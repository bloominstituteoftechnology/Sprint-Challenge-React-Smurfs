import React, { Component } from 'react';
import axios from 'axios';

import Smurf from './Smurf';

class Smurfs extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  deleteSmurf = smurfID => {
    axios
      .delete(`http://localhost:3333/smurfs/${this.smurfID}`)
      .then(response => {this.props.getSmurfs()})
      .catch(error => console.log(error))
  }

  render() {
    return (
      <div className="Smurfs">
        <h1>Smurf Village</h1>
        <ul>
          {this.props.smurfs.map(smurf => {
            return (
              <div key={smurf.id}>
                <Smurf
                  name={smurf.name}
                  id={smurf.id}
                  age={smurf.age}
                  height={smurf.height}
                />
                <button onClick={this.deleteSmurf(smurf.id)}>Delete</button>
              </div>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Smurfs;
