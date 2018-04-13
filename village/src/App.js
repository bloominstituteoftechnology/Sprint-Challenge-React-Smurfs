import React, { Component } from "react";
import { Route } from "react-router-dom";
import axios from "axios";
import "./App.css";
import SmurfForm from "./components/SmurfForm";
import Smurfs from "./components/Smurfs";

class App extends Component {
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  constructor(props) {
    super();
    this.state = {
      smurfs: []
    };
  }

  getSmurfList() {
    axios
      .get("http://localhost:3333/smurfs")
      .then(res => {
        this.setState(() => ({
          smurfs: res.data
        }));
      })
      .catch(err => {
        console.error("Error updating smurf list from server", err);
      });
  }

  updateSmurfList = arr => this.setState({ smurfs: arr });

  componentDidMount() {
    this.getSmurfList();
  }

  render() {
    return (
      <div className="App">
        <Route
          exact
          path="/"
          render={props => {
            return (
              <div>
                <SmurfForm updateSmurfList={() => this.componentDidMount()} />
                <Smurfs {...props} smurfs={this.state.smurfs} />
              </div>
            );
          }}
        />
        <Route
          path="/smurfs/:id"
          render={props => {
            return <Smurf {...props} smurfs={this.state.smurfs} />;
          }}
        />
      </div>
    );
  }
}

export default App;
