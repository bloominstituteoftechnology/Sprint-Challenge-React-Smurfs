import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import SmurfForm from "./components/SmurfForm";
import Smurfs from "./components/Smurfs";
import { Route } from "react-router-dom";
import Header from "./components/Header";

const URL = "http://localhost:3333/smurfs";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: []
    };
  }

  componentDidMount() {
    axios
      .get(URL)
      .then(response => {
        this.setState({ smurfs: response.data });
      })
      .catch(err => {
        console.log(err);
      });
  }

  deleteSmurf = id => {
    console.log("Smurf Deleted!");
    axios.delete(`http://localhost:3333/smurfs/${id}`).then(response => {
      this.setState({ smurfs: response.data });
    });
  };

  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={Header} />

        <Route exact path="/smurfs" component={SmurfForm} />
        <Route
          exact
          path="/smurfs"
          render={props => (
            <Smurfs
              {...props}
              smurfs={this.state.smurfs}
              deleteSmurf={this.deleteSmurf}
            />
          )}
        />
      </div>
    );
  }
}

export default App;
