import React, { Component } from 'react';

import Smurf from './Smurf';
import Axios from '../../node_modules/axios';
import axios from 'axios';

class Smurfs extends Component {
  deleteSmurfs = (id) => {
    axios
      .delete(`http://localhost:3333/smurfs/${id}`)
      .then(response => {
        console.log(response);
        this.props.updateSmurfs(response);
      })
      .catch(err => {
        console.log(err);
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
                deleteSmurfs={this.deleteSmurfs}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}

Smurf.defaultProps = {
 smurfs: [],
};

export default Smurfs;
