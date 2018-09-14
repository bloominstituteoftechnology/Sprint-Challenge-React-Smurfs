import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import Smurfs from "./components/Smurfs";
import { Route } from "react-router-dom";
import Header from "./components/Header";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: []
    };
  }
  componentDidMount() {
    axios
      .get("http://localhost:3333/smurfs")
      .then(response => {
        this.setState({ smurfs: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  }
  // deleteSmurf = smurfId => {
  //   return axios
  //     .delete(`http://localhost:3000/smurfs/${smurfId}`)
  //     .then(response => this.setState({ smurfs: response.data }));
  // };
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={Header} />
        <Route
          path="/smurfs"
          render={() => (
            <Smurfs smurfs={this.state.smurfs} deleteSmurf={this.deleteSmurf} />
          )}
        />
      </div>
    );
  }
}

export default App;
