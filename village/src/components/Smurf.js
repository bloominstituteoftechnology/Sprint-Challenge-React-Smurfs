import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
const axios = require('axios')

class Smurf extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      age: '',
      height: '',
    }
  }
  deleteSmurf = () => {
    let id = this.props.id;
    axios.delete(`http://localhost:3333/smurfs/${id}`)
      .then(response => {
        this.props.refreshSmurfs();
      })
      .catch(err => {
        console.log("You have failed to exile the smurf from the village")
      })
  }

  render() {
    return (
      <div className="Smurf">
        <h3>{this.props.name}</h3>
        <strong>{this.props.height} tall</strong>
        <p>{this.props.age} smurf years old</p>
        <NavLink to={`/smurfs/${this.props.id}`} className="col-4"> <button type="submit" value={this.props.id}> Change {this.props.name}'s base stats </button> </NavLink>
        <button type="submit" value={this.props.id} onClick={this.deleteSmurf}>Exile {this.props.name} from Smurf Village</button>
      </div>
    );
  }
}

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;

