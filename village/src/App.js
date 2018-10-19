import React, { Component } from "react";
import axios from "axios";
import { Route, NavLink } from "react-router-dom";

import "./App.css";
import SmurfForm from "./components/SmurfForm";
import Smurfs from "./components/Smurfs";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
      newSmurf: {
        id: null,
        name: "",
        age: null,
        height: ""
      }
    };
    console.log(this.state.smurfs);
  }

  componentDidMount() {
    axios.get("http://localhost:3333/smurfs").then(res => this.setState({ smurfs: res.data }));
  }

  addSmurfToDom = () => {
    console.log("addSmurfToDom fired");
    axios
      .post("http://localhost:3333/smurfs", this.state.smurfs)
      .then(res => console.log(".then fired", res))
      .catch(err => console.log(err));
  };
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  render() {
    return (
      <div className="App">
        <nav>
          <NavLink to="/smurfs">Smurf Village</NavLink>
          <NavLink to="/smurf-form">Add a Smurf</NavLink>
        </nav>
        <Route path="/smurf-form" render={() => <SmurfForm addSmurfToDom={this.addSmurfToDom} />} />
        <Route exact path="/smurfs" render={() => <Smurfs smurfs={this.state.smurfs} />} />
      </div>
    );
  }
}

export default App;
