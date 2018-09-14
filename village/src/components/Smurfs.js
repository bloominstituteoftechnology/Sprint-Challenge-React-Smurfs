import React, { Component } from "react";
import { Link } from "react-router-dom";
import Smurf from "./Smurf";
import SmurfForm from "./SmurfForm";

class Smurfs extends Component {
  render() {
    return (
      <div>
        <Link to="/">
          <button>Homie Smurf</button>
        </Link>
        <div className="Smurfs">
          <h1>Smurf Village</h1>
          <SmurfForm />
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
        </div>
      </div>
    );
  }
}

Smurf.defaultProps = {
  smurfs: []
};

export default Smurfs;
