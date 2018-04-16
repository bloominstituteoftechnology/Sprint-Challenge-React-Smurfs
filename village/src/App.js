import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import SmurfForm from "./components/SmurfForm";
import Smurfs from "./components/Smurfs";

class App extends Component {
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.

  constructor(props) {
    super();
    this.state = {
      smurfs: []
    };
  }

  getSmurfList() {
    axios
      .get("http://localhost:3333/smurfs")
      .then(response => {
        this.setState(() => ({
          smurfs: response.data
        }));
      })
      .catch(error => {
        console.log("Error updating smurf list ", error);
      });
  }
  componentDidMount() {
    this.getSmurfList();
  }

  updateSmurfList = array => this.setState({ smurfs: array });

  render() {
    const { smurfs } = this.state;
    return (
      <div className="App">
        <SmurfForm updateSmurfList={() => this.componentDidMount()} />
        <Smurfs smurfs={smurfs} />
      </div>
    );
  }
}

export default App;
