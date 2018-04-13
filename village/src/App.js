import React, { Component } from "react";
import axios from "axios";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import SmurfForm from "./components/SmurfForm";
import Smurfs from "./components/Smurfs";
import SmurfCard from "./components/SmurfCard";

class App extends Component {
  constructor() {
    super();
    this.state = {
      smurfs: []
    };
  }
  componentDidMount() {
    this.fetchSmurfs();
  }

  // Get Request
  fetchSmurfs() {
    axios
      .get("http://localhost:3333/smurfs")
      // .then(response => console.log(response))
      .then(response => {
        this.setState({ smurfs: response.data });
      })
      .catch(error => console.error(error));
  }
  render() {
    return (
      <div className="App">
        {/* Use Form to create new smurfs and add them to state */}
        <SmurfForm fetchSmurfs={() => this.fetchSmurfs()} />
        {/* Pass down all smurfs to Smurfs */}
        <Switch>
          <Route
            exact
            path="/"
            render={props => {
              return (
                <Smurfs
                  fetchSmurfs={() => this.fetchSmurfs()}
                  smurfs={this.state.smurfs}
                  {...props}
                />
              );
            }}
          />
          <Route path="/smurfs/:id" component={SmurfCard} />
          <Route
            component={() => {
              return <h1>Nothing to see here!</h1>;
            }}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
