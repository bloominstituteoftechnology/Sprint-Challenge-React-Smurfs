import React, { Component } from 'react';
import axios from 'axios';
import UpdateSmurf from './UpdateSmurf';

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

  render() {
    return (
      <div className="Smurf">
        <h3>{this.props.smurf.name}</h3>
        <strong>{this.props.smurf.height} tall</strong>
        <p>{this.props.smurf.age} smurf years old</p>
        <button onClick={() => this.deleteSmurf(this.props.smurf.id)}>Delete</button>
        <button onClick={() => this.toggleState()}>Update</button>
        {this.state.updateSmurf ? (
          <UpdateSmurf
            {...this.props}
            {...{ updateSmurf: this.state.updateSmurf, toggleState: this.toggleState }}
          />
        ) : null}
      </div>
    );
  }
};

export default Smurf;
