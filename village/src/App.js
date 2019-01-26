import React, { Component } from "react";
import { Route } from "react-router-dom";
import axios from "axios";
import "./App.css";
import NavBar from "./components/NavBar";
import SmurfForm from "./components/SmurfForm";
import Smurfs from "./components/Smurfs";
import Gargamel from "./components/Gargamel";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: []
    };
  }

  componentDidMount() {
    this.getData("http://localhost:3333/smurfs");
  }

  getData = URL => {
    axios
      .get(URL)
      .then(response => this.setState({ smurfs: response.data }))
      .catch(err => console.log(err));
  };

  deleteData = URL => {
    axios
      .delete(URL)
      .then(response => console.log(response))
      .then(response => this.getData)
      .catch(err => console.log(err));
  };
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  render() {
    return (
      <div className="App">
        <Route path="/" component={NavBar} />
        <Route
          path="/"
          exact
          render={props => <Smurfs smurfs={this.state.smurfs} {...props} />}
        />
        <Route
          path="/addsmurf"
          render={props => <SmurfForm update={this.getData} {...props} />}
        />
        <Route
          path="/gargamel"
          render={props => (
            <Gargamel
              smurfs={this.state.smurfs}
              update={this.getData}
              kill={this.deleteData}
              {...props}
            />
          )}
        />
      </div>
    );
  }
}

export default App;
