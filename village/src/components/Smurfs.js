import React, { Component } from "react";
import axios from "axios";
import Smurf from "./Smurf";
import "./Smurfs.css";

class Smurfs extends Component {
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  state = {
    smurfs: []
  };

  loadSmurfs = () => {
    axios
      .get("http://localhost:3333/smurfs")
      .then(response => {
        this.setState({ smurfs: response.data });
      })
      .catch(error => {
        console.error("Did not receive smurfs");
      });
  };

  componentDidMount() {
    this.loadSmurfs();
  }

  deleteSmurf = (id) => {
    const endpoint = `http://localhost:3333/smurfs/${id}`
    axios
      .delete(endpoint)
      .then(response => {
        this.loadSmurfs();
      })
      .catch(error => {
        console.error("Failed to delete smurf");
      });
  };

  render() {
    return (
      <div className="Smurfs">
        <h1>Smurf Village</h1>
        <ul>
          {this.state.smurfs.map((smurf) => {
            return (
              <div key={smurf.id}>
                <Smurf
                  name={smurf.name}
                  age={smurf.age}
                  height={smurf.height}
                  key={smurf.id}
                />
                <button onClick={() => this.deleteSmurf(smurf.id)}>Delete</button>
              </div>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Smurfs;
