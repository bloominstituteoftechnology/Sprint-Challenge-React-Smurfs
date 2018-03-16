import React, { Component } from "react";
import axios from "axios";

import Smurf from "./Smurf";

class Smurfs extends Component {
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  constructor() {
    super();
    this.state = {
      smurfs: [],
      name: "test",
      age: 0,
      height: "0cm" // needs cm added to the input
    };

    this.getSmurfs = this.getSmurfs.bind(this);
  }

  // methods
  getSmurfs() {
    axios
      .get("http://localhost:3333")
      .then(response => {
        this.setState({
          smurfs: response.data.smurfs
        });
      })
      .catch(error => console.log(error));
  }

  // component methods
  componentWillMount() {
    this.getSmurfs();
  }

  // render
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
