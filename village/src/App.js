import React, { Component } from "react";
import { Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Smurfs from "./components/Smurfs";
import SmurfForm from "./components/SmurfForm";
import "./App.css";
class App extends Component {
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  render() {
    return (
      <div className="App">
        <NavBar />
        <Route exact path="/" component={Smurfs} />
        <Route path="/smurf-form" component={SmurfForm} />
      </div>
    );
  }
}

export default App;
