import React, { Component } from "react";
import axios from "axios";
import { Route, NavLink } from 'react-router-dom';

import "./App.css";
import SmurfForm from "./components/SmurfForm";
import Smurfs from "./components/Smurfs";

const url = "http://localhost:3333/smurfs";

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
      .get(url)
      .then(response => {
        console.log(response);
        this.setState({
          smurfs: response.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  addSmurf = data => {
    axios
      .post(url, data)
      .then(response => {
        console.log(response);
        this.setState({
          smurfs: response.data,
          name: "",
          age: "",
          height: ""
        });
      })
      .catch(err => console.log(err));
  };

  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.

  render() {
    return (
      <div className="App">
        <NavLink exact to={'/'}>Smurfs</NavLink>
        <NavLink to={'/smurf-form'}>Smurf Form</NavLink>

        <Route exact path='/' render={props => (
          <Smurfs
          {...props}
          state={this.state} />
        )} />

        <Route path='/smurf-form' render={props => (
          <SmurfForm
          {...props}
          state={this.state}
          handleChange={this.handleChange}
          addSmurf={this.addSmurf} />
        )} />

      </div>
    );
  }
}

export default App;
