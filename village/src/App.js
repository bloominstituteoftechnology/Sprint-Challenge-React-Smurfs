import React, { Component } from "react";

import "./App.css";
import SmurfForm from "./components/SmurfForm";
import Smurfs from "./components/Smurfs";
import axios from "axios";
import { Route, Link, NavLink } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: []
    };

    this.serverURL = "http://localhost:3333/smurfs";
    this.addSmurfs = this.addSmurfs.bind(this);
    this.deleteSmurf = this.deleteSmurf.bind(this);
    this.submitUpdate = this.submitUpdate.bind(this);
  }

  // get initial data from server
  componentDidMount() { 
    axios
      .get(this.serverURL)
      .then(response => this.setState({ smurfs: response.data }))
      .catch(error => console.log(error));
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.

  // adding a new smurf
  addSmurfs(addedSmurfs) {
    this.setState({ smurfs: addedSmurfs });

    // setTimeout(() => this.props.history("/"), 1000)
  }

  deleteSmurf(event, id) {
    event.preventDefault();

    axios
      .delete(`${this.serverURL}/${id}`)
      .then(response => this.setState({ smurfs: response.data }))
      .catch(error => console.log(error));
  }

  // when edit info about a smurf is done and when the submit button is clicked.  
  submitUpdate(smurf) {

    axios
      .put(`${this.serverURL}/${smurf.id}`, smurf)
      .then(response => this.setState({ smurfs: response.data }))
      .catch(error => console.log(error));
  }

  render() {
    return (
      <div className="App">
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/smurf-form">Add smurf</NavLink>
        </nav>

// "/" URL display list of all smurfs
        <Route
          exact
          path="/"
          render={props => (
            <Smurfs
              {...props}
              smurfs={this.state.smurfs}
              deleteSmurf={this.deleteSmurf}
              submitUpdate={this.submitUpdate}
            />
          )}
        />

// URL with "smurf/id" display a smurf with matching id
        <Route
          path="/smurf/:id"
          render={props => (
            <Smurfs
              {...props}
              smurfs={this.state.smurfs}
              deleteSmurf={this.deleteSmurf}
            />
          )}
        />

// "smurf-form" URL display a form that can add a new smurf
        <Route
          path="/smurf-form"
          render={props => <SmurfForm {...props} addSmurfs={this.addSmurfs} />}
        />
      </div>
    );
  }
}

export default App;
