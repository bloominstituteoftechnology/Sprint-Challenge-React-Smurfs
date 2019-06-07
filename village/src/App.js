import React, { Component } from "react";
import { Route, NavLink } from "react-router-dom";

import axios from "axios";

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
      .then(response => this.setState({ smurfs: response.data }))
      .catch(error => console.log(error));
  }

  handleDelete = id => {
    axios
      .delete(`http://localhost:3333/smurfs/${id}`)
      .then(response => this.setState({ friends: response.data }))
      .catch(error => console.log(error));
    window.location.reload();
  };

  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  render() {
    return (
      <div className="App">
        <header>
          <nav>
            <NavLink exact to={"/"}>
              Smurfs
            </NavLink>
            <NavLink to={"/smurf-form"}>Add a New Smurf</NavLink>
          </nav>
        </header>
        <div className="container">
          <Route path="/smurf-form" component={SmurfForm} />
          <Route
            exact
            path="/"
            render={props => (
              <Smurfs
                smurfs={this.state.smurfs}
                handleDelete={this.handleDelete}
                {...props}
              />
            )}
          />
        </div>
      </div>
    );
  }
}

export default App;
