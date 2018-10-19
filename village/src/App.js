import React, { Component } from 'react';
import { Route } from "react-router-dom";
import axios from "axios";

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurf from "./components/Smurf";
import Smurfs from './components/Smurfs';
import NavBar from "./components/NavBar";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
    };
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.

  componentDidMount() {
    axios
      .get("http://localhost:3333/smurfs")
      .then(response => this.setState({ smurfs: response.data }))
      .catch(error => console.log(error));
  }

  handleSetData = data => {
    this.setState({ smurfs: data });
  }

  deleteSmurf = (ev, id) => {
    ev.preventDefault();
    axios
      .delete(`http://localhost:3333/smurfs/${id}`)
      .then(response => this.setState({ smurfs: response.data }))
      .catch(error => console.log(error));
  }

  render() {
    return (
      <div className="App">
        <NavBar />
        <Route exact path="/" render={(props) => <Smurfs {...props} smurfs={this.state.smurfs} deleteSmurf={this.deleteSmurf} />} />
        <Route path="/smurf-form" render={(props) => <SmurfForm {...props} refresh={this.handleSetData} />} />
        <Route path="/smurf/:id" render={(props) => <Smurf {...props} smurfs={this.state.smurfs} />} />
      </div>
    );
  }
}

export default App;
