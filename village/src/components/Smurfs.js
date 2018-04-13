import React, { Component } from "react";
import axios from "axios";
import SmurfForm from "./SmurfForm";

import Smurf from "./Smurf";

class Smurfs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
      name: "",
      age: "",
      height: "",
      toggleForm: false
    };
  }

  componentDidMount() {
    this.getSmurfs();
  }

  getSmurfs = () => {
    axios.get("http://localhost:3333/smurfs").then(response => {
      this.setState({ smurfs: response.data }).catch(err => {
        console.log(err);
      });
    });
  };

  render() {
    return (
      <div className="Smurfs">
        <h1>Smurf Village</h1>
        <SmurfForm getSmurfs={this.getSmurfs} />
        <ul>
          {this.state.smurfs.map(smurf => {
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
    );
  }
}

export default Smurfs;
