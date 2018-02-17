import React, { Component } from "react";
import Smurf from "./Smurf";

class Smurfs extends Component {
  render() {
    return (
      <div>
        <h1>Smurf Village</h1>
        <ul className="Smurfs">
          {this.props.smurfs.map(smurf => {
            return (
              <Smurf
                name={smurf.name}
                age={smurf.age}
                height={smurf.height}
                key={smurf.id}
                id={smurf.id}
                badSmurf={this.props.onDelete}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Smurfs;
