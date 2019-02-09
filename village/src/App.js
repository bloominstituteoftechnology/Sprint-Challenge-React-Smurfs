import React, { Component } from "react";
import { Route } from "react-router-dom";
import axios from "axios";

import "./App.css";
import SmurfForm from "./components/SmurfForm";
import Smurfs from "./components/Smurfs";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
      formDefaults: {
        name: '',
        age: '',
        height: '',
        id: ''
      },
      update: false
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:3333/smurfs")
      .then(response => {
        this.setState({ smurfs: response.data });
      })
      .catch(err => {
        console.log(`This data is all smurfed up: ${err}`);
      });
  }

  changeUpdateStatus = (name, age, height, id) => {
    this.setState({ 
      update: !this.state.update,
      formDefaults: {
        name: name,
        age: age,
        height: height,
        id: id
      }
    });
    this.props.history.push(`/smurf-form`);
  };

  passState = data => {
    this.setState({
      smurfs: data,
      update: false,
      formDefaults: {
        name: '',
        age: '',
        height: ''
      },
    });
  };
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  render() {
    return (
      <div className="App">
        <Route
          path="/smurf-form"
          render={props => (
            <SmurfForm passState={this.passState} update={this.state.update} smurf={this.state.formDefaults} {...props} />
          )}
        />
        <Route
          exact
          path="/"
          render={props => (
            <Smurfs
              smurfs={this.state.smurfs}
              passState={this.passState}
              changeUpdateStatus={this.changeUpdateStatus}
            />
          )}
        />
      </div>
    );
  }
}

export default App;
