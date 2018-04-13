import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import SmurfForm from "./components/SmurfForm";
import Smurfs from "./components/Smurfs";

// pass down smurfs collection to Smurfs
class App extends Component {
  constructor() {
    super();
    this.state = {
      smurfs: []
    };
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  componentDidMount() {
    this.fetchSmurfs();
  }

  // Get Request
  fetchSmurfs() {
    axios
      .get("http://localhost:3333/smurfs")
      .then(response => console.log(response))
      .catch(error => console.error(error));
  }

  render() {
    return (
      <div className="App">
        {/* Use Form to create new smurfs and add them to state */}
        <SmurfForm />
        {/* Pass down all smurfs to Smurfs */}
        <Smurfs />
      </div>
    );
  }
}

export default App;
