import React, { Component } from "react";
import axios from "axios";

import "./App.css";

import SmurfForm from "./components/SmurfForm";
import Smurfs from "./components/Smurfs";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [ ],
      name: "",
      age: "",
      height: ""
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:3333/smurfs")
      .then(response => {
        this.setState({ smurfs: response.data });
      })
      .catch(err => console.log(err));
  }
  addSmurf = event => {
    event.preventDefault();
    const newSmurf = {
      name: this.state.name,
      age: this.state.age,
      height: this.state.height
    };
    axios
      .post("http://localhost:3333/smurfs", newSmurf)
      .then(response => {
        this.setState({ smurfs: response.data, name: "", age: "", height: "" });
      })
      .catch(err => console.log(err));
  };

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  render() {
    return (
      <div className="App">
        <SmurfForm
          addSmurf={this.addSmurf}
          handleInputChange={this.handleInputChange}
          name={this.state.name}
          age={this.state.age}
          height={this.state.height}
        />
        <Smurfs smurfs={this.state.smurfs} />
      </div>
    );
  }
}

export default App;
