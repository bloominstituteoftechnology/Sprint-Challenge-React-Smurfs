import React, { Component } from "react";

import Smurf from "./Smurf";

import { Link } from "react-router-dom";

class Smurfs extends Component {
  render() {
    return (
      <div className="Smurfs">
        <h1>Smurf Village</h1>
        <ul>
          {this.props.smurfs.map(smurf => {
            return (
              <Link key={`save-${Math.random()}`} to={`/smurfs/${smurf.id}`}>
                <Smurf
                  handleSetData={this.props.handleSetData}
                  handleDelete={this.props.handleDelete}
                  name={smurf.name}
                  id={smurf.id}
                  age={smurf.age}
                  height={smurf.height}
                  key={smurf.id}
                />
              </Link>
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
