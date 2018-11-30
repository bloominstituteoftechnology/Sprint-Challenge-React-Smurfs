import React, { Component } from "react";
import "../App.css";
import Smurf from "./Smurf";
import { Route } from "react-router-dom";

class Smurfs extends Component {
  render() {
    return (
      <div className="Smurfs">
        <h1>Smurf Village</h1>
        <ul>
          {this.props.smurfs.map(smurf => {
            return (
              <div
                className="Smurf"
                onClick={() => this.props.history.push(`/smurfs/${smurf.id}`)}
              >
                <h3>{smurf.name}</h3>
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

// onClick={() => this.props.history.push(`/smurfs/${smurf.id}`)}
// history={this.props.history}
// match={this.props.match}
// location={this.props.location}

{
  /* <Smurf
                  name={smurf.name}
                  id={smurf.id}
                  age={smurf.age}
                  height={smurf.height}
                  key={smurf.id}
                /> */
}
