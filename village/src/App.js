import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import SmurfForm from "./components/SmurfForm";
import Smurfs from "./components/Smurfs";
import { Route, NavLink } from "react-router-dom";
import NavBar from "./components/NavBar";

class App extends Component {
  state = {
    smurfs: [],
    name: "",
    age: "",
    height: ""
  };

  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  componentDidMount = () => {
    axios
      .get("http://localhost:3333/smurfs")
      .then(res => this.setState({ smurfs: res.data }))
      .catch(error => console.log(error));
  };

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  addSmurf = event => {
    event.preventDefault();
    // add code to create the smurf using the api
    axios
      .post(`http://localhost:3333/smurfs`, this.state)
      .then(res => {
        this.setState({ smurfs: res.data, name: "", age: "", height: "" });
        this.props.history.push("/");
      })
      .catch(error => console.log(error));
  };

  deleteSmurf = id => {
    axios
      .delete(`http://localhost:3333/smurfs/${id}`)
      .then(res => this.setState({ smurfs: res.data }))
      .catch(error => console.log(error));
  };

  render() {
    return (
      <div>
        <NavBar />

        <Route
          exact
          path="/"
          render={props => (
            <Smurfs
              {...props}
              deleteSmurf={this.deleteSmurf}
              smurfs={this.state.smurfs}
            />
          )}
        />
        <Route
          path="/smurf-form"
          render={props => (
            <SmurfForm
              {...props}
              handleInputChange={this.handleInputChange}
              addSmurf={this.addSmurf}
              state={this.state}
            />
          )}
        />
      </div>
    );
  }
}

export default App;
