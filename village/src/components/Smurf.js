import React, { Component } from 'react';
import axios from 'axios';

class Smurf extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  deleteSmurf = smurfID => {
    axios
      .delete(`http://localhost:3333/smurfs/${smurfID}`)
      .then(response => this.props.getSmurfs())
      .catch(error => console.log(error))
  }

  render() {
    return (
      <div className="Smurf">
        <h3>{this.props.smurf.name}</h3>
        <strong>{this.props.smurf.height} tall</strong>
        <p>{this.props.smurf.age} smurf years old</p>
        <button onClick={() => this.deleteSmurf(this.props.smurf.id)}>Delete</button>
      </div>
    );
  }
};

export default Smurf;
