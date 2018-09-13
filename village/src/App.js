import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import SmurfForm from "./components/SmurfForm";
import Header from "./components/Header";
import Smurfs from "./components/Smurfs";
import { Route } from "react-router-dom";
import SoloSmurfPage from "./components/SoloSmurfPage";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: []
    };
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  componentDidMount() {
    axios
      .get("http://localhost:3333/smurfs")
      .then(response => {
        this.setState({ smurfs: response.data });
        console.log(response.data);
        console.log(this.state.smurfs.name + "this is state");
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="App">
        {/* <SmurfForm />
        <Smurfs smurfs={this.state.smurfs} /> */}

        <Route exact path="/" component={Header} />
        <Route
          exact
          path="/smurfs"
          render={() => <Smurfs smurfs={this.state.smurfs} />}
        />
        <Route path="/smurfs/:id" component={SoloSmurfPage} />
      </div>
    );
  }
}

export default App;
