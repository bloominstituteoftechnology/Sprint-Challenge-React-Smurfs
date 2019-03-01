import React, { Component } from "react";
import axios from "axios";
import { Route, Link, NavLink } from "react-router-dom";

import "./App.css";
import SmurfForm from "./components/SmurfForm";
import Smurfs from "./components/Smurfs";

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
      .then(res => {
        //console.log(res)
        this.setState({ smurfs: res.data });
      })
      .catch(err => console.log("Error: ", err));
  }

  updateSmurfs = smurfs => {
    this.setState({ smurfs });
  };

  removeSmurf = (e, id) => {
    e.preventDefault();
    axios
      .delete(`http://localhost:333/smurfs/${id}`)
      .then(res => console.log(res))
      .catch(err => console.log("hahaha: ", err));
  };

  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  render() {
    return (
      <div className="App">
        <nav>
          <NavLink to="/">Smurfs</NavLink>
          <NavLink to="/smurf-form">Smurf Form</NavLink>
        </nav>

        <Route
          exact
          path="/"
          render={props => (
            <Smurfs
              smurfs={this.state.smurfs}
              {...props}
              removeSmurf={this.removeSmurf}
            />
          )}
        />
        <Route
          path="/smurf-form"
          render={props => (
            <SmurfForm updateSmurfs={this.updateSmurfs} {...props} />
          )}
        />
      </div>
    );
  }
}

export default App;
//<SmurfForm updateSmurfs={this.updateSmurfs} />
//<Smurfs smurfs={this.state.smurfs} />
