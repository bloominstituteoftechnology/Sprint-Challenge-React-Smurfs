import React, { Component } from "react";

import Smurf from "./Smurf";

class Smurfs extends Component {
  render() {
    return (
      <div className="Smurfs">
        <h1>
          <i class="fas fa-tree" /> <i class="fas fa-tree" />{" "}
          <i class="fas fa-tree" /> Smurf Village <i class="fas fa-tree" />{" "}
          <i class="fas fa-tree" /> <i class="fas fa-tree" />
        </h1>
        <p className="directions">
          Click a Smurf's name to edit their information
        </p>
        <ul>
          {this.props.state.smurfs.map(smurf => {
            return (
              <Smurf
                smurfs={this.props.state.smurfs}
                name={smurf.name}
                id={smurf.id}
                age={smurf.age}
                height={smurf.height}
                key={smurf.id}
                deleteSmurf={this.props.deleteSmurf}
                props={this.props}
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
