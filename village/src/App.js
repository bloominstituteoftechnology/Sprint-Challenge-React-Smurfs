import React, { Component, Fragment } from "react";
import { Route } from "react-router-dom";
import axios from "axios";

import "./App.css";
import SmurfForm from "./components/SmurfForm";
import Smurfs from "./components/Smurfs";
import Header from "./components/Header";

const dataUrl = "http://localhost:3333/smurfs/";

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
      .get(dataUrl)
      .then(response => {
        this.setState({ smurfs: response.data, loading: false });
      })
      .catch(err => {
        console.log(err);
      });
  }
  render() {
    console.log(this.state.smurfs);
    return (
      <div className="App">
        <Route exact path={"/"} component={Header} />
        <Route
          path={"/smurfList"}
          render={props => <SmurfForm {...props} dataUrl={dataUrl} />}
        />
        <Route
          path={"/smurfList"}
          render={props => <Smurfs {...props} smurfs={this.state.smurfs} />}
        />
      </div>
    );
  }
}

export default App;
