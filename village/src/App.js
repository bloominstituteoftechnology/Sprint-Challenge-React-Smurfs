import React, { Component } from "react";
import Axios from "axios";
import "./App.css";
import styled from "styled-components";
import { Route, NavLink } from "react-router-dom";
import SmurfForm from "./components/SmurfForm";
import Smurfs from "./components/Smurfs";

// https://github.com/LambdaSchool/Sprint-Challenge-React-Smurfs/pull/699



//Nav Styles
const Container = styled.div`
  max-width: 1080px;
  display: flex;
  justify-content: center;
  
`;

const NavBar = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 80%;
  height: 20px;
  margin: 0 auto;
`;

const NavItem = styled.div`
  margin: 20px;
  text-decoration: none;
`;


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: []
    };
  }

  componentDidMount() {
    Axios
      .get("http://localhost:3333/smurfs")
      .then(res => {
        console.log(res);
        this.setState({ smurfs: res.data });
      })
      .catch(err => console.log(err));
  }

  addSmurf = (smurfs) => {
    this.setState({
      smurfs: smurfs
    });
  }

  deleteSmurf = (id) => {
    Axios
      .delete(`http://localhost:3333/smurfs/${id}`)
      .then(res => this.setState({ smurfs: res.data }))
      .catch(err => console.log(err));
  };

  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  render() {
    return (
      <Container>
        <NavBar>
          <NavItem>
            <button><NavLink to="/" style={{ textDecoration: 'none', color:'black' }}> Village  </NavLink></button>
          </NavItem>
          <NavItem>
            <button><NavLink to="/smurf-form" style={{ textDecoration: 'none', color:'black' }} > Add a Smurf </NavLink></button>
          </NavItem>
        </NavBar>
        <Route path="/smurf-form" render={props => <SmurfForm {...props} onSubmit ={this.addSmurf} />} />
        <Route
          exact
          path="/"
          render={props => <Smurfs {...props} smurfs={this.state.smurfs} deleteSmurf={this.deleteSmurf} />}
        />
      </Container>
    )
  }
}

export default App;