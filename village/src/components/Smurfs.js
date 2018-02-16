import React, { Component } from "react";
import Smurf from "./Smurf";
import axios from "axios";

class Smurfs extends Component {
  state = {
    smurfs: []
  };

  componentDidMount = () => {
    this.loadSmurfs();
  };

  loadSmurfs = () => {
    axios
      .get("http://localhost:3333/smurfs")
      .then(function(response) {
        console.log("RESPONSE : ", response);
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  render() {
    return (
      <div className="Smurfs">
        <h1>Smurf Village</h1>
        <ul>
          {this.state.smurfs.map(smurf => {
            return (
              <Smurf
                name={smurf.name}
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
