import React, { Component } from "react";
import Header from "./components/Header";
import axios from "axios";
import { Link, Route } from "react-router-dom";
import "./App.css";
import SmurfForm from "./components/SmurfForm";
import Smurfs from "./components/Smurfs";

const url = "http://localhost:3333/smurfs";
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
      //.catch(err => console.log(err));
      .catch(error => {
        console.log(error);
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
  render() {
    return (
      <div className="App">
        <Route
          exact
          path="/"
          render={props => [
            <Header />,
          ]}
        />
        <Route
          path="/smurfs"
          render={props => [
            <Header key={1} />,
            <SmurfForm
              key={2}
              {...props}
              smurfs={this.state.smurfs}
              handleSubmit={this.handleSubmit}
              handleName={this.handleName}
              handleAge={this.handleAge}
              handleHeight={this.handleHeight}
              name={this.state.name}
              age={this.state.age}
              height={this.state.height}
            />,
            <Smurfs {...props} smurfs={this.state.smurfs} />
          ]}
        />
      </div>
    );
  }
}

export default App;
