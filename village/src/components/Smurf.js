import React, { Component } from 'react';
import axios from 'axios';

class Smurf extends Component {
  render() {
    return (
      <div className="Smurf">
        <h3>{this.props.name}</h3>
        <strong>{this.props.height} tall</strong>
        <p>{this.props.age} old</p>
        <button onClick={ this.deleteSmurf }>Delete</button>
      </div>
    );
  }

  deleteSmurf = (event) => {
    console.log(this.props.id)
    axios
    .delete(`http://localhost:3333/smurfs/${this.props.id}`)
    .then((response) => {
      console.log('Response', response);
      this.props.loadSmurfs();
    })
    .catch((err) => {console.error('Error', err)})
  }
}

export default Smurf;