import React, { Component } from "react";
import axios from "axios";
import "./App.css";

import SmurfForm from "./components/SmurfForm";
import Smurfs from "./components/Smurfs";
import { Route } from "react-router-dom";
// import NavLink from "react-router-dom/NavLink";
import { NavbarBrand, Navbar, NavItem, Nav, NavLink } from "reactstrap";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: []
    };
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  componentDidMount() {
    axios
      .get("http://localhost:3333/smurfs")
      .then(response => {
        this.setState({ smurfs: response.data });
      })
      .catch(err => {
        console.log("Azrel is comming!", err);
      });
  }

  addASmurf = newSmurfObj => {
    axios
      .post("http://localhost:3333/smurfs", newSmurfObj)
      .then(response => {
        this.setState({
          smurfs: response.data
        });
      })
      .catch(err => console.log(err));
  };
  deleteSmurf = id => {
    return () => {
      axios
        .delete(`http://localhost:3333/smurfs/${id}`)
        .then(response =>
          this.setState({
            smurfs: response.data
          })
        )
        .catch(err => console.log(err));
    };
  };

  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  render() {
    return (
      <div className="App">
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Smurfs Village</NavbarBrand>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/">Smurf Manifest</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/smurf-form">Add Smurfs</NavLink>
            </NavItem>
          </Nav>
        </Navbar>
        <Route
          path="/smurf-form"
          render={props => (
            <SmurfForm
              {...props}
              addASmurf={this.addASmurf}

            />
          )}
        />
        <Route
          exact
          path="/"
          render={props => (
            <Smurfs
              {...props}
              smurfs={this.state.smurfs}
              deleteSmurf={this.deleteSmurf}
            />
          )}
        />
      </div>
    );
  }
}

export default App;
