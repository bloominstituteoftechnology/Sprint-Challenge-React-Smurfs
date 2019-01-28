import React, { Component } from "react";
import { Route } from "react-router-dom";
import axios from "axios";

import "./App.css";

import SmurfForm from "./components/SmurfForm";
import Smurfs from "./components/Smurfs";
import SmurfNav from "./components/SmurfNav";


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

  componentDidMount() {
    axios
      .get("http://localhost:3333/smurfs")
      .then(response => {
        this.setState({ smurfs: response.data });
      })
      .catch(err => console.log(err));
  }
  addSmurf = event => {
    event.preventDefault();
    const newSmurf = {
      name: this.state.name,
      age: this.state.age,
      height: this.state.height
    };
    axios
      .post("http://localhost:3333/smurfs", newSmurf)
      .then(response => {
        this.setState({ smurfs: response.data, name: "", age: "", height: "" });
      })
      .catch(err => console.log(err));
  };

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    return (
      <div className="App">
        <SmurfNav />
        <Route
          path="/smurf-form"
          render={props => (
            <SmurfForm
              addSmurf={this.addSmurf}
              handleInputChange={this.handleInputChange}
              name={this.state.name}
              age={this.state.age}
              height={this.state.height}
            />
          )}
        />
        <Route
          exact
          path="/"
          render={props => <Smurfs {...props} smurfs={this.state.smurfs} />}
        />
        {/* <Smurfs smurfs={this.state.smurfs} /> */}
      </div>
    );
  }
}

export default App;
