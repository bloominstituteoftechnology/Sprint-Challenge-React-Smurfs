import React, { Component } from "react";
import { Link } from "react-router-dom";

import Smurf from "./Smurf";
import SmurfCard from "./SmurfCard";

class Smurfs extends Component {
  render() {
    return (
      <div className="Smurfs">
        <h1>
          Smurf <span className="blue">/</span>
          <span className="red">/</span> Village
        </h1>
        <ul>
          {this.props.smurfs.map(smurf => {
            return (
              <div key={smurf.id}>
                <Link to={`/smurfs/${smurf.id}`}>
                  <SmurfDetails
                    smurf={{
                      name: smurf.name,
                      age: smurf.age,
                      height: smurf.height,
                      id: smurf.id
                    }}
                    key={smurf.id}
                  />
                </Link>
              </div>
            );
          })}
        </ul>
      </div>
    );
  }
}
function SmurfDetails({ smurf }) {
  return <SmurfCard smurf={smurf} />;
}
Smurf.defaultProps = {
  smurfs: []
};

export default Smurfs;
