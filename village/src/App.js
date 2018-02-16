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
        <SmurfForm loadingUp={this.loadFriends} />
        <Smurfs loadingUp={this.loadFriends} smurfs={this.state.smurfs} />
      </div>
    );
  }

  loadFriends = () => {
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
