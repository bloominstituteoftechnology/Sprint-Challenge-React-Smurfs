import React, { Component } from 'react';
import axios from 'axios';

import Smurf from './Smurf';

class Smurfs extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  deleteSmurf = (id) => {
    axios.delete(`${this.props.url}/smurfs/${id}`)
      .then(({data}) => this.props.updateSmurfs(data))
      .catch(err => console.error(err));
  }

  editSmurf = (id, activeSmurf) => {
    this.props.history.push(`/${id}/edit`)
  }

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
                deleteSmurf={this.deleteSmurf}
                editSmurf={this.editSmurf}
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
