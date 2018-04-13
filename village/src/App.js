import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Smurfs from "./components/Smurfs";
import SmurfCard from "./components/SmurfCard";
import axios from "axios";

class App extends Component {
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.

  constructor() {
    super();
    this.state = {
      smurfs: []
    };
  }

  componentDidMount() {
    this.getSmurfList();
  }

  getSmurfList = () => {
    axios
      .get(`http://localhost:3333/smurfs`)
      .then(response => {
        this.setState({ smurfs: response.data });
      })
      .catch(error => {
        console.error("Server Error getting Smurfs", error);
      });
  };

  render() {
    return (
      <div className="App">
        <Switch>
          <Route
            exact
            path="/"
            render={props => (
              <Smurfs
                getSmurfList={this.getSmurfList}
                smurfs={this.state.smurfs}
              />
            )}
          />
          <Route path="/smurfs/:id" component={SmurfCard} />
          <Route
            component={() => <h1>There are no Smurfs here, go back!</h1>}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
