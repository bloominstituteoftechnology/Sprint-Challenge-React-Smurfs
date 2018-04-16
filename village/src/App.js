import React, { Component } from "react";
import { Route } from "react-router-dom";
import axios from "axios";
import "./App.css";
import SmurfForm from "./components/SmurfForm";
import Smurfs from "./components/Smurfs";
import Smurf from "./components/Smurf";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: []
    };
    // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
    // Notice what your map function is looping over and returning inside of Smurfs.
    // You'll need to make sure you have the right properties on state and pass them down to props.
    this.getSmurfs = this.getSmurfs.bind(this);
  }

  getSmurfs() {
    axios
      .get("http://localhost:3333/smurfs")
      .then(response => {
        this.setState({ smurfs: response.data });
        console.log("Here it is");
      })
      .catch(error => {
        console.log(`Error getting Smurfs: ${error}`);
      });
  }

  deleteSmurf = id => {
    axios
      .delete(`http://localhost:3333/smurfs/${id}`)
      .then(res => {
        console.log(res);
        this.getSmurfs();
      })
      .catch(err => {
        console.log(err);
      });
  };

  updateSmurf = arr => this.setState({ smurfs: arr });

  componentDidMount() {
    this.getSmurfs();
  }

  render() {
    const { smurfs } = this.state;
    return (
      <div className="App">
        <Route
          exact
          path="/"
          render={props => {
            return (
              <div>
                <SmurfForm updateSmurf={() => this.componentDidMount()} />
                <Smurfs deleteSmurf={this.deleteSmurf} smurfs={smurfs} />
              </div>
            );
          }}
        />
        <Route
          path="/smurfs/:id"
          render={props => {
            return (
              <Smurf
                {...props}
                deleteSmurf={this.deleteSmurf}
                smurfs={this.state.smurfs}
              />
            );
          }}
        />
      </div>
    );
  }
}
export default App;
