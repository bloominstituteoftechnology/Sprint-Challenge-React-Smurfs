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
      smurfs: []
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:3333/smurfs")
      .then(res => {
        console.log(res.data);
        this.setState({ smurfs: res.data });
      })
      .catch(err => console.error(err));
  }

  addSmurf = smurf => {
    axios
      .post(`http://localhost:3333/smurfs`, smurf)
      .then(res => this.setState({ smurfs: res.data }))
      .catch(err => console.error(err));
  };

  editSmurf = (id, data) => {
    axios
      .put(`http://localhost:3333/smurfs/${id}`, data)
      .then(res => this.setState({ smurfs: res.data }))
      .catch(err => console.log(err));
  };

  deleteSmurf = id => {
    axios
      .delete(`http://localhost:3333/smurfs/${id}`)
      .then(res => this.setState({ smurfs: res.data }))
      .catch(err => console.log(err));
  };

  render() {
    console.log(this.state);
    return (
      <div className="App">
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/smurf-form">Add Smurf</NavLink>
        </nav>
        <Route
          path="/"
          render={props => (
            <Smurfs
              {...props}
              smurfs={this.state.smurfs}
              delete={this.deleteSmurf}
              edit={this.editSmurf}
            />
          )}
        />
        <Route
          path="/smurf-form"
          render={props => <SmurfForm {...props} add={this.addSmurf} />}
        />
        <Route
          exact
          path="/smurf-edit/:id"
          render={props => (
            <SmurfForm {...props} editSmurf={this.editSmurf} edit />
          )}
        />
      </div>
    );
  }
}

export default App;
