import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import SmurfForm from "./components/SmurfForm";
import Smurfs from "./components/Smurfs";
import { Route } from "react-router-dom";
import NavBar from "./components/NavBar";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: []
    };
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.

  pullSmurfData() {
    axios
      .get("http://localhost:3333/smurfs")
      .then(response => {
        this.setState(() => ({ smurfs: response.data }));
      })
      .catch(error => {
        console.error("Server Error", error);
      });
  }
  componentDidMount() {
    this.pullSmurfData();
  }

  render() {
    return (
      <div className="App">
        <Route path="/" component={NavBar} />
        <Route path="/smurf-form" render={props => <SmurfForm {...props}/>} />
        <Route
          path="/"
          render={props => <Smurfs {...props} smurfs={this.state.smurfs} pullSmurfData={this.pullSmurfData}/>}
        />
      </div>
    );
  }
}

export default App;
