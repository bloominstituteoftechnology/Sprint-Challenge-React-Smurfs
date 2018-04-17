import React, { Component } from "react";

import Smurf from "./Smurf";

class Smurfs extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    // console.log(this.props.getSmurfs); // check if the props are working
    return (
      <div className="Smurfs">
        <h1>Smurf Village</h1>
        <ul>
          {this.props.smurfs.map(smurf => {
            return (
              <Smurf
                getSmurfs={this.props.getSmurfs}
                deleteSmurf={this.props.deleteSmurf}
                name={smurf.name}
                id={smurf.id}
                age={smurf.age}
                height={smurf.height}
                key={smurf.id}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Smurfs;
