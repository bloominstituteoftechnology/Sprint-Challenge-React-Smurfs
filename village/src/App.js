import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import SmurfForm from "./components/SmurfForm";
import Smurfs from "./components/Smurfs";
import { Route, NavLink } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: []
    };
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  componentDidMount() {
    axios
      .get("http://localhost:3333/smurfs")
      .then(res => {
        this.setState(() => ({ smurfs: res.data }));
      })
      .catch(err => {
        console.error("Server Error", err);
      });
  }

  createSmurf = data => {
    this.setState({ smurfs: data });
  };

  render() {
    return (
      <div className="App">
        <div className="Nav">
          <NavLink className="link" to="/">
            Home
          </NavLink>
          <NavLink className="link" to="/add-smurf">
            Add Smurf
          </NavLink>
        </div>
        <Route
          path="/add-smurf"
          render={props => (
            <SmurfForm {...props} createSmurf={this.createSmurf} />
          )}
        />
        <Route
          exact
          path="/"
          render={props => <Smurfs {...props} smurfs={this.state.smurfs} />}
        />
      </div>
    );
  }
}

export default App;
