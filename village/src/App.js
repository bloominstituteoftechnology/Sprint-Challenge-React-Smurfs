import React, { Component } from "react";
import axios from "axios";

import "./App.css";
import SmurfForm from "./components/SmurfForm";
import Smurfs from "./components/Smurfs";

class App extends Component {
  state = {
    smurfs: null
  };

  render() {
    return (
      <div className="App">
        <SmurfForm loadingUp={this.loadSmurfs} />
        <Smurfs
          loadingUp={this.loadSmurfs}
          smurfs={this.state.smurfs}
          deleteSmurf={this.deleteSmurf}
        />
      </div>
    );
  }

  deleteSmurf = id => {
    axios
      .delete(`http://localhost:3333/smurfs/${id}`)
      .then(response => {
        console.log('response on delete is', response);
        this.setState({ smurfs: response.data[0] });
      })
      .catch(error => {
        console.error("error deleting", error);
      });
  };

  loadSmurfs = () => {
    axios
      .get("http://localhost:3333/smurfs")
      .then(response => {
        console.log(response);
        console.log(this.state);
        this.setState({ smurfs: response.data });
      })
      .catch(error => {
        console.log("error", error);
      });
  };
}

export default App;
