import React, { Component } from "react";
import axios from "axios";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import SmurfForm from "./components/SmurfForm";
import Smurfs from "./components/Smurfs";
import Smurf from "./components/Smurf";
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
  // Work in Progress: Route for /smurfs/:id is not fully set up
  // that path will be routing to a new Component: SmurfCard
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
              return <Smurfs smurfs={this.state.smurfs} {...props} />;
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
