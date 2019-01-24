import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import SmurfForm from "./components/SmurfForm";
import Smurfs from "./components/Smurfs";
import { Route, NavLink } from "react-router-dom";
import styled from "styled-components";

const APP = styled.div`
  text-align: center;
`;

const Nav = styled.div`
  width: 200px;
  display: flex;
  margin: 15px auto;
  justify-content: space-between;
`;

const Link = styled.h6`
  border: 1px solid blue;
  border-radius: 14px;
  padding: 15px;
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: []
    };
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  componentDidMount() {
    axios
      .get("http://localhost:3333/smurfs")
      .then(res => {
        this.setState(() => ({ smurfs: res.data }));
      })
      .catch(err => {
        console.error("Server Error", err);
      });
  }

  createSmurf = data => {
    this.setState({ smurfs: data });
  };

  render() {
    return (
      <APP>
        <Nav>
          <NavLink to="/">
            <Link>Home</Link>
          </NavLink>
          <NavLink to="/add-smurf">
            <Link>Add Smurf</Link>
          </NavLink>
        </Nav>

        <Route
          path="/add-smurf"
          render={props => (
            <SmurfForm {...props} createSmurf={this.createSmurf} />
          )}
        />
        <Route
          exact
          path="/"
          render={props => <Smurfs {...props} smurfs={this.state.smurfs} />}
        />
      </APP>
    );
  }
}

export default App;
