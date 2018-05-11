import React, { Component } from "react";
import axios from "axios";
import { Route, Link } from "react-router-dom";
import "./App.css";
import SmurfForm from "./components/SmurfForm";
import Smurfs from "./components/Smurfs";
import Header from "./components/Header";

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
      .then(info => this.setState({ smurfs: info.data }))
      .catch(err => console.log(err));
  };
  refreshSmurf = () => {
    axios
      .get("http://localhost:3333/smurfs")
      .then(info => this.setState({ smurfs: info.data }))
      .catch(err => console.log(err));
  };
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={Header} />
        <Route
          path="/smurfs"
          render={props => {
            return (
              <div>
                <Link to="/">Home</Link>
                <SmurfForm refreshSmurf={this.refreshSmurf} />
                <Smurfs
                  refreshSmurf={this.refreshSmurf}
                  smurfs={this.state.smurfs}
                />
              </div>
            );
          }}
        />
      </div>
    );
  }
}

export default App;
