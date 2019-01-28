import React, { Component } from "react";
import { Route, Link, NavLink } from "react-router-dom";

import Smurf from "./Smurf";

class Smurfs extends Component {
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
              />
            );
          })}
        </ul>
         {/*<Link to={"/smurf-form"} className="link">
          <div className="button">Add a Smurf Now!</div>
        </Link>*/}
      </div>
    );
  }
}

Smurf.defaultProps = {
  smurfs: []
};

export default Smurfs;
