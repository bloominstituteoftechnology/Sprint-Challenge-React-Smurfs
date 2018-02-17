import React, { Component } from "react";
import "./App.css";
import SmurfForm from "./components/SmurfForm";
import Smurfs from "./components/Smurfs";
import axios from "axios";

class App extends Component {
  state = {
    smurfs: []
  };

  componentDidMount = () => {
    this.loadSmurfs();
  };

  render() {
    return (
      <div className="App">
        <SmurfForm className="form" onCreate={this.loadSmurfs} />
        <Smurfs smurfs={this.state.smurfs} onDelete={this.deleteSmurf} />
      </div>
    );
  }

  loadSmurfs = () => {
    axios
      .get("http://localhost:3333/smurfs")
      .then(res => {
        this.setState({ smurfs: res.data });
      })
      .catch(error => {
        console.log("LOADING ERROR :", error);
      });
  };

  deleteSmurf = id => {
    const smurf = `http://localhost:3333/smurfs/${id}`;
    axios
      .delete(smurf)
      .then(res => {
        this.loadSmurfs();
      })
      .catch(error => {
        console.log("Delete ERROR :", error);
      });
  };
}

export default App;
