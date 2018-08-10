import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import SmurfForm from "./components/SmurfForm";
import Smurfs from "./components/Smurfs";
import Header from "./components/Header";
import { Route } from "react-router-dom";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
      name: "",
      age: "",
      height: ""
    };
  }
  componentDidMount() {
    this.getSmurfs();
  }

  getSmurfs = () => {
    axios
      .get("http://localhost:3333/smurfs")
      .then(response => {
        this.setState(() => ({ smurfs: response.data }));
      })
      .catch(error => {
        console.error("Server Error", error);
      });
  };

  handleName = event => {
    event.preventDefault();
    this.setState({
      name: event.target.value
    });
  };

  handleAge = event => {
    event.preventDefault();
    this.setState({
      age: event.target.value
    });
  };

  handleHeight = event => {
    event.preventDefault();
    this.setState({
      height: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    axios
      .post("http://localhost:3333/smurfs", {
        name: this.state.name,
        age: this.state.age,
        height: this.state.height
      })
      .then(response => {
        this.getSmurfs();
      })
      .catch(error => {
        console.log(error);
      });
  };
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.

  render() {
    return (
      <div className="App">
        <Route exact path="/" component={Header} />

        <Route
          path="/smurfs"
          render={props => (
            <SmurfForm
              {...props}
              smurfs={this.state.smurfs}
              handleSubmit={this.handleSubmit}
              handleName={this.handleName}
              handleAge={this.handleAge}
              handleHeight={this.handleHeight}
              name={this.state.name}
              age={this.state.age}
              height={this.state.height}
            />
          )}
        />
        <Route
          path="/smurfs"
          render={props => <Smurfs {...props} smurfs={this.state.smurfs} />}
        />
      </div>
    );
  }
}

export default App;
