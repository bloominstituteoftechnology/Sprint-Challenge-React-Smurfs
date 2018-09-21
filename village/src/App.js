import React, { Component } from "react";
import Axios from "axios";
import "./App.css";
import { BrowserRouter as Route, NavLink } from "react-router-dom";
import SmurfForm from "./components/SmurfForm";
import Smurfs from "./components/Smurfs";
import styled from "styled-components";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: []
    };
  }

  componentDidMount() {
    Axios.get("http://localhost:3333/smurfs")
      .then(response => {
        console.log(response);
        this.setState({ smurfs: response.data });
      })
      .catch(err => console.log(err));
  }

  onCreate = smurfs => {
    console.log("smurfs", smurfs);
    this.setState({
      smurfs: smurfs
    });
  };

  deleteSmurf = id => {
    Axios.delete(`http://localhost:3333/smurfs/${id}`)
      .then(response => this.setState({ smurfs: response.data }))
      .catch(err => console.log(err));
  };

  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.

  render() {
    return (
      <App>
        <NavWrapper>
          <NavLink to="/">Village</NavLink>
          <NavLink to="/smurf-form">Add a Smurf</NavLink>
        </NavWrapper>
        <Route
          path="/smurf-form"
          render={props => <SmurfForm {...props} onCreate={this.onCreate} />}
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
      </App>
    );
  }
}

const App = styled.div`
  max-width: 880px;
  display: flex;
  justify-content: center;
  `;

const NavWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  justify-content: space-evenly;
  width: 100%;
  height: 20px;
  margin: 0;
`;

export default App;
