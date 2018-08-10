import React, { Component } from "react";
import "./App.css";
import SmurfForm from "./components/SmurfForm";
import Smurfs from "./components/Smurfs";
import Header from "./components/Header";
import axios from "axios";
import { Route } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: []
    };
  }

  componentDidMount() {
    this.census();
  }
  census = () => {
    axios
      .get("http://127.0.0.1:3333/smurfs")
      .then(response => {
        this.setState({
          smurfs: response.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  };
  updateParentState = data => {
    this.setState({
      smurfs: data
    });
  };

  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  render() {
    return (
      <div className="App">
        <Route
          exact
          path="/smurfs"
          render={props => (
            <div className="smurfVill">
              <SmurfForm
                {...props}
                updateParentState={this.updateParentState}
              />
              <Smurfs {...props} smurfs={this.state.smurfs} />
            </div>
          )}
        />
      </div>
    );
  }
}

export default App;
