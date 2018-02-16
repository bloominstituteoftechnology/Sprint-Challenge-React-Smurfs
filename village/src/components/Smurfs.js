import React, { Component } from "react";

import Smurf from "./Smurf";
import "./Smurfs.css";

class Smurfs extends Component {
  render() {
    return (
      <div className="Smurfs">
        <div className="center">
          <div className="header">Smurf Village</div>
        </div>
        <ul className="block">
          {this.props.smurfs.map(smurf => {
            return (
              <Smurf
                name={smurf.name}
                age={smurf.age}
                height={smurf.height}
                id={smurf.id}
                key={smurf.id}
                smurf={smurf}
                onDelete={this.props.onDelete}
                onUpdate={this.props.onUpdate}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Smurfs;
