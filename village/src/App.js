import React, { Component } from "react";
import { Route } from "react-router-dom";
import axios from "axios";

import "./App.css";
import SmurfForm from "./components/SmurfForm";
import Smurfs from "./components/Smurfs";
import Header from "./components/Header";
import IndSmurfCard from "./components/IndSmurfCard";

const dataUrl = "http://localhost:3333/smurfs/";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
      name: "",
      age: "",
      height: ""
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

  delSmurf = id => {
    axios
      .delete(`http://localhost:3333/smurfs/${id}`)
      .then(response => {
        this.setState({ smurfs: response.smurfs });
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    console.log(this.state.smurfs);
    return (
      <div className="App">
        <Route exact path={"/"} component={Header} />
        <Route
          exact
          path={"/smurfList"}
          render={props => (
            <SmurfForm
              {...props}
              dataUrl={dataUrl}
              smurfs={this.state.smurfs}
            />
          )}
        />
        <Route
          exact
          path={"/smurfList"}
          render={props => <Smurfs {...props} smurfs={this.state.smurfs} />}
        />
        <Route
          path={`/smurfList/:id`}
          render={props => (
            <IndSmurfCard
              {...props}
              smurfs={this.state.smurfs}
              deleteHandler={this.delSmurf}
            />
          )}
        />
      </div>
    );
  }
}
IndSmurfCard.defaultProps = {
  name: "",
  age: "",
  height: ""
};

export default App;
