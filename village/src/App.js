import React, { Component } from "react";
import axios from "axios";
import { Route, NavLink } from "react-router-dom";

import "./App.css";
import SmurfForm from "./components/SmurfForm";
import Smurfs from "./components/Smurfs";
import Smurf from "./components/Smurf";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: []
    };
    this.updateSmurfData = this.updateSmurfData.bind(this);
    this.deleteSmurf = this.deleteSmurf.bind(this);
  }

  componentDidMount() {
    this.updateSmurfData();
  }

  updateSmurfData() {
    axios.get("http://localhost:3333/smurfs").then(res => {
      this.setState({
        smurfs: res.data
      });
      console.log(this.state);
    });
  }

  deleteSmurf(ev, id) {
    ev.preventDefault();
    axios
    .delete(`http://localhost:3333/smurfs/${id}`)
    .then(this.updateSmurfData)
  }

  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  render() {
    return (
      <div className="App">
        <NavLink to="/">Smurfs</NavLink>
        <br />
        <br />
        <NavLink to="/smurf-form">Smurf Form</NavLink>
        <Route
          exact
          path="/"
          render={props => (
            <Smurfs
              {...props}
              smurfs={this.state.smurfs}
              deleteSmurf={this.deleteSmurf}
            />
          )}
        />
        <Route
          exact
          path="/smurf-form"
          render={props => (
            <SmurfForm {...props} updateSmurfData={this.updateSmurfData} />
          )}
        />
      </div>
    );
  }
}

export default App;
