import React, { Component } from "react";

import Smurf from "./Smurf";

class Smurfs extends Component {
  render() {
    return (
      <div className="smurfs-container">
        {this.props.smurfs.map(smurf => {
          return (
            <Smurf
              deleteSmurf={this.props.deleteSmurf}
              name={smurf.name}
              id={smurf.id}
              age={smurf.age}
              height={smurf.height}
              key={smurf.id}
            />
          );
        })}
      </div>
    );
  }
}

Smurf.defaultProps = {
  smurfs: []
};

export default Smurfs;
