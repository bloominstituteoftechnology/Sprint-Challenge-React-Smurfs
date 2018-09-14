import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Smurf extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurf: null
    }
  }

  render() {
    return (
      <div className="Smurf">
        <h3>{this.props.name}</h3>
        <strong>{this.props.height} tall</strong>
        <p>{this.props.age} smurf years old</p>
        <p>{this.props.id}</p>
        <NavLink to={`/smurfs/${this.props.id}`} >Go to page</NavLink>
        <button onClick={event => {this.props.goToSmurfForm(event, this.props.id)}}>Edit Smurf</button>
        <button onClick={() => this.props.deleteSmurf(this.props.id)}>Delete Smurf</button>
      </div>
    );
  }

};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

