import React, {Component} from "react";
import axios from "axios";
import {Route, NavLink} from "react-router-dom";

import "./App.css";
import SmurfForm from "./components/SmurfForm";
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
    axios
      .get("http://localhost:3333/smurfs")
      .then(response => {
        this.setState({smurfs: response.data});
      })
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
        <NavLink to="/" exact>
          Home
        </NavLink>
        <NavLink to="/smurfs">Smurfs</NavLink>
        <NavLink to="/add-a-smurf">Add A Smurf</NavLink>
        <Route path="/" render={Home} />
        <SmurfForm getSmurfs={this.getSmurfs} />
        <Smurfs smurfs={this.state.smurfs} deleteSmurf={this.deleteSmurf} />
      </div>
    );
  }
}

export default App;
