import React, { Component } from 'react';
import axios from 'axios';




class Smurf extends React.Component {

  deleteSmurf = event => {
    event.preventDefault();
    axios.delete(`http://localhost:3333/smurfs/${this.props.id}`)
      .then(res => {
        console.log(res);
        console.log(res.data);
      })

  }

  render() {
  return (
    <div className="Smurf">
      <button onClick={this.deleteSmurf}>X</button>
      <h4>Smurf ID: {this.props.id}</h4>
      <h3>{this.props.name}</h3>
      <strong>{this.props.height} tall</strong>
      <p>{this.props.age} smurf years old</p>
    </div>
  );
}
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;

