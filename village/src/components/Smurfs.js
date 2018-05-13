import React, { Component } from 'react';

import axios from 'axios';
import Smurf from './Smurf';

class Smurfs extends Component {

  deleteSmurf = (id) => {
    axios.delete("http://localhost:3333/Smurfs" + id)
      .then(res => {
        this.props.updateData(res.data);
      })
      .catch(err => {
        console.log(err);
      })
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

Smurf.defaultProps = {
 smurfs: [],
};

export default Smurfs;
