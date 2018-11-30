import React, { Component } from "react";
import axios from "axios";
import { Route, NavLink } from "react-router-dom";

import "./App.css";
import SmurfForm from "./components/SmurfForm";
import Smurfs from "./components/Smurfs";

window.axios = axios;

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
        console.log(res.data);
        this.setState({ smurfs: res.data });
      })
      .catch(err => console.error(err));
  }

  addSmurf = smurf => {
    axios
      .post(`http://localhost:3333/smurfs`, smurf)
      .then(res => this.setState({ smurfs: res.data }))
      .catch(err => console.error(err));
  };

  deleteSmurf = id => {
    axios
      .delete(`http://localhost:3333/smurfs/${id}`)
      .then(res => this.setState({ smurfs: res.data }))
      .catch(err => console.log(err));
  };
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  render() {
    console.log(this.state);
    return (
      <div className="App">
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/smurf-form">Add Smurf</NavLink>
        </nav>
        {/* <SmurfForm add={this.addSmurf} />
        <Smurfs smurfs={this.state.smurfs} /> */}
        <Route
          path="/"
          render={props => (
            <Smurfs
              {...props}
              smurfs={this.state.smurfs}
              delete={this.deleteSmurf}
            />
          )}
        />
        <Route
          path="/smurf-form"
          render={props => <SmurfForm {...props} add={this.addSmurf} />}
        />
      </div>
    );
  }
}

export default App;
