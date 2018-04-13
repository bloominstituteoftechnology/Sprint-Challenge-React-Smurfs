import React, { Component } from 'react';
import axios from 'axios';

class Smurf extends Component {
  constructor(props) {
    super(props);
    this.state = {
      updateSmurf: false
    };
  }

  deleteSmurf = smurfID => {
    axios
      .delete(`http://localhost:3333/smurfs/${smurfID}`)
      .then(response => this.props.getSmurfs())
      .catch(error => console.log(error))
  }

  toggleState = () => {
    this.setState({ updateSmurf: !this.state.updateSmurf });
  }

  updateSmurf = smurfID => {
    axios
      .put('http://localhost:3333/smurfs/${smurfID}')
      .then(response => this.getSmurfs())
      .catch(error => console.log(error))
  }

  render() {
    return (
      <div className="Smurf">
        <h3>{this.props.smurf.name}</h3>
        <strong>{this.props.smurf.height} tall</strong>
        <p>{this.props.smurf.age} smurf years old</p>
        <button onClick={() => this.deleteSmurf(this.props.smurf.id)}>Delete</button>
        <button onClick={() => this.toggleState()}>Update</button>
        {this.state.updateSmurf ? (
          <div>hey</div>
        ) : null}
      </div>
    );
  }
};

export default Smurf;
