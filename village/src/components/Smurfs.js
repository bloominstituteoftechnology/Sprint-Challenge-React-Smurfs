import React, { Component } from "react";
import { Link } from "react-router-dom";

import Smurf from "./Smurf";

class Smurfs extends Component {
  render() {
    return (
      <div className="Smurfs">
        <h1>Smurf Village</h1>
        <ul>
          {this.props.smurfs.map(smurf => {
            return (
              <div className="Smurf">
                <Link to={`/${smurf.id}`}>
                  <h3>{smurf.name}</h3>
                </Link>
                <strong>{smurf.height} tall</strong>
                <p>{smurf.age} smurf years old</p>
              </div>
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
