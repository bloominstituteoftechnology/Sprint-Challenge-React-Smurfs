import React, { Component } from "react";

import "./App.css";
import SmurfForm from "./components/SmurfForm";
import Smurfs from "./components/Smurfs";
import axios from "axios";
import { Route, Link } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: []
    };
  }

  componentDidMount() {
    axios.get("http://localhost:3333/smurfs").then(res => {
      this.setState({
        smurfs: res.data
      });
    });
  }

  handleAddNewSmurf = data => {
    const newSmurfs = data;
    console.log(newSmurfs);
    this.setState({
      smurfs: newSmurfs
    });
  };
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  render() {
    return (
      <div className="App">
        <nav className="nav">
          <Link to="/">
            <h1>Home</h1>
          </Link>
          <Link to="/smurf-form">
            <h1>Add New Smurf</h1>
          </Link>
        </nav>
        <Route
          exact
          path="/smurf-form"
          render={props => (
            <SmurfForm {...props} handleAddNewSmurf={this.handleAddNewSmurf} />
          )}
        />
        {/* <SmurfForm handleAddNewSmurf={this.handleAddNewSmurf} /> */}
        <Route
          exact
          path="/"
          render={props => <Smurfs {...props} smurfs={this.state.smurfs} />}
        />
        {/* <Smurfs smurfs={this.state.smurfs} /> */}
      </div>
    );
  }
}

export default App;
