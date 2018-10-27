import React, { Component } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

import Smurf from "./Smurf";

class Smurfs extends Component {
  deleteSmurf = id => {
    axios.delete(`http://localhost:3333/smurfs/${id}`).then(response => {
      this.props.passState(response.data);
    });
  };

  render() {
    return (
      <div className="Smurfs">
        <NavLink to={`/smurf-form/`}>
          <button>Add Smurf to Village</button>
        </NavLink>
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
                changeUpdateStatus={this.props.changeUpdateStatus}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}

Smurf.defaultProps = {
  smurfs: []
};

export default Smurfs;
