import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Smurf from "./components/Smurf";
import Smurfs from "./components/Smurfs";
import SingleSmurf from "./components/SingleSmurf";

class App extends Component {
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Smurfs} />
        <Route path="/smurf/:id" component={SingleSmurf} />
      </Switch>
    );
  }
}

export default App;
