import React, { Component } from "react";
import { Link } from "react-router-dom";
import Smurf from "./Smurf";

class Smurfs extends Component {
  render() {
    return (
      <div className="Smurfs">
        <h1>Smurf Village</h1>
        <button onClick={() => this.props.history.replace("/smurf-form")}>
          Smurf Maker
        </button>
        <Link to="/smurf-form">Smurf Maker</Link>
        <ul>
          {this.props.smurfs.map(smurf => {
            return (
              <div>
                <button onClick={() => this.props.delete(smurf.id)}>
                  delete smurf
                </button>
                <Smurf
                  name={smurf.name}
                  id={smurf.id}
                  age={smurf.age}
                  height={smurf.height}
                  key={smurf.id}
                />
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
