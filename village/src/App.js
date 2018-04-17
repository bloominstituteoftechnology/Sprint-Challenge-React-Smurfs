import React, { Component } from "react";
import { Route } from "react-router-dom";

import Pathfinder from "./components/Pathfinder.js";
import Home from "./components/Home.js";
import "./App.css";

class App extends Component {

  render() {
    return (
      <div className="App">
        <Route exact path="/" component={Home} />
        <Route path="/smurfs" component={Pathfinder} />
      </div>
    );
  }
}

export default App;
