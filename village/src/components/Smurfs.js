import React, { Component } from "react";
import axios from "axios";
import Smurf from "./Smurf";
import '../styles/Smurf.css';

class Smurfs extends Component {
  state = {
    smurfs: []
  };
  render() {
    return (
      <div className="Smurfs">
        <h1>Welcome to <span id="smurf">Smurfs</span> Village</h1>
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
  componentDidMount() {
    axios
    .get("http://localhost:3333/smurfs")
    .then(response => this.setState({ smurf: response.data }))
    .catch(() => console.error("it's not connected to the server!"));
  }
}

export default Smurfs;
