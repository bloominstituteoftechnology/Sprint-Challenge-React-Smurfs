import React, { Component } from "react";
import axios from "axios";
import { Route } from "react-router-dom";

import "./App.css";
import SmurfForm from "./components/SmurfForm";
import Smurfs from "./components/Smurfs";
import SmurfHeader from "./components/SmurfHeader";

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

  updateState = newState => {
    this.setState({
      smurfs: newState
    });
  };

  render() {
    return (
      <div className="App">
        <Route path="/" component={SmurfHeader} />
        <Route
          exact
          path="/smurf-form"
          render={props => <SmurfForm {...props} />}
        />

        <Route
          exact
          path="/village"
          render={props => <Smurfs {...props} smurfs={this.state.smurfs} />}
        />
      </div>
    );
  }
}

export default App;
