import React, { Component } from "react";
import axios from "axios";
import styled from "styled-components";

import "./App.css";
import SmurfForm from "./components/SmurfForm";
import Smurfs from "./components/Smurfs";
import { Route, NavLink } from "react-router-dom";
import SingleSmurf from "./components/SingleSmurf";

// ===========================
// ==== STYLED COMPONENTS ====
// ===========================

const StyledNav = styled.nav`
  width: 100%;
  padding: 40px 5px 45px;
  border-bottom: 1px solid blue;
  margin-bottom: 20px;
  background: aqua;
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: white;
  padding: 10px 20px;
  font-size: 20px;
  cursor: pointer;
  background: blue;
  text-transform: uppercase;
  margin: 0 35px;
  letter-spacing: 2px;
  border-radius: 55px;
  box-shadow: 0 4px lightblue;
  position: relative;
  outline: none;
  border: 2px solid lightblue;

  &:hover {
    top: 2px;
    box-shadow: 0 2px lightblue;
  }

  &:active {
    top: 4px;
    box-shadow: 0 0 lightblue;
  }
`;

// ===========================
// ====     COMPONENT     ====
// ===========================

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: []
    };
  }

  componentDidMount = () => {
    axios
      .get("http://localhost:3333/smurfs")
      .then(res => {
        this.setState({
          smurfs: res.data
        });
      })
      .catch(err => console.log(err));
  };

  deleteSmurf = id => {
    axios
      .delete(`http://localhost:3333/smurfs/${id}`)
      .then(res => {
        this.setState({
          smurfs: res.data
        });
      })
      .catch(err => console.log(err));
  };

  resetVillage = data => {
    this.setState({
      smurfs: data
    });
  };

  render() {
    return (
      <div className="App">
        <StyledNav>
          <StyledNavLink to="/">Village</StyledNavLink>
          <StyledNavLink to="/smurf-form">Add a Smurf</StyledNavLink>
        </StyledNav>
        <Route
          exact
          path="/"
          render={props => (
            <Smurfs
              {...props}
              deleteSmurf={this.deleteSmurf}
              smurfs={this.state.smurfs}
            />
          )}
        />
        <Route
          path="/smurf-form"
          render={props => (
            <SmurfForm
              {...props}
              addSmurf={this.addSmurf}
              resetVillage={this.resetVillage}
            />
          )}
        />
        <Route
          path="/smurfs/:id"
          render={props => (
            <SingleSmurf {...props} resetVillage={this.resetVillage} />
          )}
        />
      </div>
    );
  }
}

export default App;
