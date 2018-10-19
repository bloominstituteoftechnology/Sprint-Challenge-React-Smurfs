import React, { Component } from 'react';
import axios from "axios";

import Smurf from './Smurf';

class Smurfs extends Component {

  deleteItem = (event, id) => {
    event.preventDefault();
    axios
      .delete(`http://localhost:3333/smurfs/${id}`)
      .then(response => {
        this.setState({ smurfs: response.data });
        window.location.reload();
      })
      .catch(error => console.log(error));
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
                deleteItem={this.deleteItem}
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
