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
  loadSmurfs = () => {
    axios
      .get("http://localhost:3333/smurfs")
      .then(res => {
        this.setState({ smurfs: res.data });
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    return (
      <div className="App">
        <SmurfForm className='form' onCreate={this.loadSmurfs} />
        <Smurfs smurfs={this.state.smurfs}/>
      </div>
    );
  }
}

export default App;
