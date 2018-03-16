import React, { Component } from "react";

import "./App.css";
import SmurfForm from "./components/SmurfForm";
import Smurfs from "./components/Smurfs";
import axios from "axios";

class App extends Component {
  constructor() {
    super();
    this.state = {
      smurfs: []
    };

    this.getSmurfs = this.getSmurfs.bind(this);
  }
  getSmurfs() {
    axios.get("http://localhost:3333/smurfs").then(response => {
      console.log("Get: ", response);

      this.setState({ smurfs: response.data });
    });
  }
  render() {
    return (
      <div className="App">
        <SmurfForm get={this.getSmurfs} />
        <Smurfs smurfs={this.state.smurfs} />
      </div>
    );
  }
}

export default App;
