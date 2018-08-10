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
      smurfs: []
    };
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.

  componentDidMount() {
    axios
      .get(`http://localhost:3333/smurfs`)
      .then(response => {
        console.log(response);
        this.setState({ smurfs: response.data, errorMessage: null });
      })
      .catch(err => {
        setTimeout(() => {
          //displays error message but after 4 seconds reverts back to null
          this.setState({ errorMessage: null });
        }, 4000);
        this.setState({ errorMessage: "Error Fetching smurfs!" });
      });
  }

  //function that takes in data and set state of smurfs to data
  //pass it below to SmurfForm as props
  //then call it in the addSmurf function
  setSmurfData = data => this.setState({ smurfs: data });

  //does the same as above but with errorMessage
  //pass through props below and call after
  setErrorHandler = errMsg => {
    this.setState({ errorMessage: errMsg });
    //sets error message to null after 2 seconds
    setTimeout(() => {
      this.setState({ errorMessage: null });
    }, 2000);
  };

  render() {
    return (
      <div className="App">
        <Route exact path="/" component={Header} />
        {/* if errorMessage is NOT null then it will display the errorMessage
      otherwise it will return null */}
        {this.state.errorMessage !== null ? (
          <h3 style={{ color: "red" }}>{this.state.errorMessage}</h3>
        ) : null}
        <Route
          path="/smurfs"
          render={props => (
            <Smurfs
              {...props}
              smurfs={this.state.smurfs}
              setSmurfData={this.setSmurfData}
              setErrorHandler={this.setErrorHandler}
            />
          )}
        />
      </div>
    );
  }
}

export default App;
