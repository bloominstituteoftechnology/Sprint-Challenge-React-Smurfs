import React, { Component } from "react";

import SmurfForm from "./components/SmurfForm";
import Smurfs from "./components/Smurfs";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import SmurfLink from "./components/SmurfLink";
import styled from "styled-components";
import axios from "axios";
import { Route } from "react-router-dom";

const MainContainer = styled.div`
  max-width: 800px;
  width: 100%;
  margin: 0 auto;
  padding: 1%;
  border: solid black 1px;
  background-image: linear-gradient(
      to right,
      rgba(255, 0, 0, 0),
      #41B6E9
    );
  }
  margin-top: 20px;
  margin-bottom: 40px;
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

  componentDidMount = () => {
    axios
      .get("http://localhost:3333/smurfs")
      .then(response => {
        this.setState({ smurfs: [...response.data] });
      })
      .catch(err => console.log(err));
  };
  handleCreateOrUpdate = () => {
    axios
      .post("http://localhost:3333/smurfs")
      .then(response => {
        this.setState({ smurfs: response.data });
      })
      .catch(err => console.log(err));
  };
  handleDelete = (event, beingDeleted) => {
    event.preventDefault();
    axios
      .delete(`http://localhost:3333/smurfs/${beingDeleted.id}`, beingDeleted)
      .then(response => {
        this.setState({
          smurfs: [...response.data]
        });
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <MainContainer>
        <Navigation />
        <Route exact path="/" component={Header} />
        <Route exact path="/smurfs" component={SmurfForm} />
        <Route
          exact
          path="/smurfs"
          render={props => <Smurfs {...props} smurfs={this.state.smurfs} />}
        />
      </MainContainer>
    );
  }
}

export default App;
