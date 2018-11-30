import React, { Component } from "react";
import { Route, NavLink } from "react-router-dom";
import axios from "axios";

import "./App.css";
import SmurfForm from "./components/SmurfForm";
import Smurfs from "./components/Smurfs";
import Home from "./components/Home";
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
      .then(response =>
        this.setState({
          smurfs: response.data
        })
      )
      .catch(err => console.log(err));
  }
  addSmurf = data => {
    axios
      .post("http://localhost:3333/smurfs", data)
      .then(response => {
        console.log(response);
        this.setState({ smurfs: response.data });
      })
      .catch(err => console.log(err));
  };
  deleteSmurf = id => {
    axios
      .delete(`http://localhost:3333/smurfs/${id}`)
      .then(response =>
        this.setState({
          smurfs: response.data
        })
      )
      .catch(err => console.log(err));
  };
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  render() {
    return (
      <div className="App">
        <nav className="nav-links">
          <NavLink exact to="/">
            Home
          </NavLink>
          <NavLink to="/smurf-form">Add a Smurf</NavLink>
          <NavLink to="/smurfs">View Smurfs</NavLink>
        </nav>
        <Route exact path="/" component={Home} />
        <Route
          path="/smurf-form"
          render={props => <SmurfForm {...props} addSmurf={this.addSmurf} />}
        />
        <Route
          path="/smurfs"
          render={props => (
            <Smurfs
              {...props}
              smurfs={this.state.smurfs}
              deleteSmurf={this.deleteSmurf}
            />
          )}
        />
      </div>
    );
  }
}

export default App;
