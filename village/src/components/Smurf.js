import React, { Component } from 'react';
import axios from 'axios';

class Smurf extends Component {
  deleteSmurf = e => {
    axios.delete(`http://localhost:3333/smurfs/${this.props.id}`)
      .then(response => {
        this.props.updateSmurfList(response.data);
      })
      .catch(error => console.log(error));
  }

  render() {
    return (
      <div className="Smurf">
        <h3>{this.props.name}</h3>
        <strong>{this.props.height} tall</strong>
        <p>{this.props.age} smurf years old</p>
        <button onClick={this.deleteSmurf}>Delete</button>
      </div>
    );
  }
}

export default Smurf;
