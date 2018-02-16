import React, { Component } from "react";

import Smurf from "./Smurf";

class Smurfs extends Component {
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server

  componentDidMount() {
    this.props.loadingUp();
  }

  render() {
    console.log('render in smurf', this.props.smurf);
    if (!this.props.smurfs) {
      return <div>Loading smurf information...</div>;
    }
    return (
      <div className="Smurfs">
        <h1>Smurf Village</h1>
        <ul>
          {this.props.smurfs.map(smurf => {
            return (
              <div>
                <Smurf
                  name={smurf.name}
                  age={smurf.age}
                  height={smurf.height}
                  key={smurf.id}
                />
                <button
                  onClick={() => {
                    this.props.deleteSmurf(smurf.id);
                  }}
                >
                  Delete
                </button>
              </div>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Smurfs;
