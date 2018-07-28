import React, { Component } from 'react';

import Smurf from './Smurf';
import axios from 'axios';

class Smurfs extends Component {
  deleteSmurf = (id) => {
    axios.delete(`http://localhost:3333/smurfs/${id}`)
    .then(res=>
      this.props.handleChange()
    )
    .catch(err => console.log(err))
  }
  render() {
    return (
            <div>
      <h1>Smurf Village</h1>
      <div className="Smurfs">

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
                <button className="delete-button" onClick={() => this.deleteSmurf(smurf.id)}>Delete</button>
              </div>

            );
          })}
        </ul>
      </div>
      </div>
    );
  }
}

Smurf.defaultProps = {
 smurfs: [],
};

export default Smurfs;
