import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import axios from "axios";
import "./App.css";
import Header from "./components/Header";
import SmurfForm from "./components/SmurfForm";
import Smurfs from "./components/Smurfs";

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
  componentDidMount() {
    axios
      .get("http://localhost:3333/smurfs")
      .then(response => {
        this.setState({ smurfs: response.data });
      })
      .catch(err => {
        console.log("Error message: ", err);
      });
  }

  render() {
    return (
      <div className="App">
        <Route exact path="/" component={Header} />
        <Route
          path="/smurfs"
          render={props => {
            return (
              <div>
                <Link to="/">Home</Link>
                <Smurfs smurfs={this.state.smurfs} />
                <SmurfForm smurfs={this.state.smurfs} />
              </div>
            );
          }}
        />
      </div>
    );
  }
}

export default App;
