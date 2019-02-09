import React, { Component } from 'react';

import Smurf from './Smurf';
import axios from "axios";

class Smurfs extends Component {
  handleDelete = event => {
    const id = event.target.dataset.id; /*Assigning a variable the id of the delete button's smurf*/

    axios.delete(`http://localhost:3333/smurfs/${id}`); /*deleting the smurf off of /smurfs using axios*/
  };

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
                delete={this.handleDelete}
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
