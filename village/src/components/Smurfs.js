import React, { Component } from "react";
import { Link } from "react-router-dom";

import Smurf from "./Smurf";

class Smurfs extends Component {
  delete = e => {
    e.preventDefault();
    console.log(e.target.id);
    let id = parseInt(e.target.id, 10);
    console.log(id);
    this.props.delete(id);
  };

  render() {
    return (
      <div className="Smurfs">
        <h1>Smurf Village</h1>
        <ul>
          {this.props.smurfs.map(smurf => {
            return (
              <div key={smurf.id}>
                <Smurf
                  name={smurf.name}
                  id={smurf.id}
                  age={smurf.age}
                  height={smurf.height}
                />
                <Link to={`/smurf-edit/${smurf.id}`}>
                  <button>Update Smurf</button>
                </Link>
                <button type="submit" id={smurf.id} onClick={this.delete}>
                  Delete Smurf
                </button>
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
