import React, { Component } from "react";
import axios from "axios";
import { Route } from "react-router-dom";
import { NavLink } from "react-router-dom";

import "../src/css/index.css";
import SmurfForm from "./components/SmurfForm";
import Smurfs from "./components/Smurfs";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: []
    };
  }

  componentDidMount() {
    axios
      .get(`http://localhost:3333/smurfs`)
      .then(res => {
        this.setState({
          smurfs: res.data
        });
      })
      .catch(err => console.log(err));
  }

  addNewSmurf = data => {
    axios
      .post(`http://localhost:3333/smurfs`, data)
      .then(res => {
        this.setState({
          smurfs: res.data
        });
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="App">
        <nav>
          <NavLink to="/">Smurfs</NavLink>
          <NavLink to="/smurf-form">Add New Smurf</NavLink>
        </nav>

        <Route
          exact
          path="/smurf-form"
          render={props => (
            <SmurfForm {...props} addNewSmurf={this.addNewSmurf} />
          )}
        />

        <Route
          exact
          path="/"
          render={props => <Smurfs {...props} smurfs={this.state.smurfs} />}
        />
      </div>
    );
  }
}

export default App;
