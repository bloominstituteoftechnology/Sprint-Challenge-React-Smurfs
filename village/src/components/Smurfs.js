import React, { Component } from 'react';
import axios from 'axios';

import Smurf from './Smurf';

class Smurfs extends Component {

  deleteSmurf = (event, id) => {
    axios.delete(`http://localhost:3333/smurfs/${id}`)
    .then (response => {
      this.setState({smurfs: response.data})
    })
  }

  render() {
    return (
      <div className="Smurfs">
        <h1>Smurf Village</h1>
        <ul>
          {this.props.smurfs.map(smurf => {
            return (
              <div className="smurfdiv">
              <Smurf
                name={smurf.name}
                id={smurf.id}
                age={smurf.age}
                height={smurf.height}
                key={smurf.id}
              />
              <button type="x" onClick={event => this.deleteSmurf(event, smurf.id)}>Delete from the village</button>
              </div>

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
