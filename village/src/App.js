import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import SmurfForm from "./components/SmurfForm";
import Smurfs from "./components/Smurfs";
import { Route } from "react-router-dom";
import NavLink from "react-router-dom/NavLink";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],

    };
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  componentDidMount() {
    axios
      .get("http://localhost:3333/smurfs")
      .then(response => {
        this.setState({ smurfs: response.data });
      })
      .catch(err => {
        console.log("Azrel is comming!", err);
      });
  }

  addASmurf = (newSmurfObj) => {
    axios
      .post("http://localhost:3333/smurfs", newSmurfObj)
      .then(response => {
        this.setState({
          smurfs: response.data,
        });
      })
      .catch(err => console.log(err));
  };

  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  render() {
    return (
      <div className="App">
        <NavLink exact to="/">
          Smurf Village
        </NavLink>{" "}
        <NavLink to="/smurf-form">Add Smurfs</NavLink>
        <Route path="/smurf-form" render={props => (<SmurfForm {...props} addASmurf={this.addASmurf} />)} />
        <Route
          exact
          path="/"
          render={props => <Smurfs smurfs={this.state.smurfs} {...props} />}
        />
      </div>
    );
  }
}

export default App;
