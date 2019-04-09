import React, {Component} from "react";
import axios from "axios";
import {Route, NavLink} from "react-router-dom";

import "./App.css";
import SmurfForm from "./components/SmurfForm";
import SmurfById from "./components/SmurfById";
import Smurfs from "./components/Smurfs";
import Home from "./components/Home";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: []
    };
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  componentDidMount = () => {
    this.getSmurfs();
  };

  getSmurfs = () => {
    console.log("getSmurfs launched");
    axios
      .get("http://localhost:3333/smurfs")
      .then(response => {
        this.setState({smurfs: response.data}, console.log(this.state));
      })
      .catch(err => console.log(err));
  };

  addSmurf = (e, newSmurf) => {
    axios
      .post("http://localhost:3333/smurfs", newSmurf)
      .then(res => this.setState({smurfs: res.data}))
      .catch(err => console.log(err));
  };

  deleteSmurf = (e, id) => {
    e.preventDefault();
    axios
      .delete(`http://localhost:3333/smurfs/${id}`)
      .then(response => {
        this.setState({smurfs: response.data});
      })
      .catch(err => console.log(err));
  };

  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  render() {
    return (
      <div className="App">
        <div className="nav">
          <NavLink to="/" exact>
            Home
          </NavLink>
          <NavLink to="/smurfs">Smurfs</NavLink>
          <NavLink to="/add-a-smurf">Add A Smurf</NavLink>
        </div>

        <Route path="/" exact render={Home} />

        <Route
          path="/add-a-smurf"
          render={props => <SmurfForm addSmurf={this.addSmurf} {...props} />}
        />

        <Route
          path="/smurfs"
          render={props => (
            <Smurfs smurfs={this.state.smurfs} deleteSmurf={this.deleteSmurf} />
          )}
        />

        <Route
          path="/smurf/:id"
          render={props => <SmurfById {...props} smurfs={this.state.smurfs} />}
        />
      </div>
    );
  }
}

export default App;
