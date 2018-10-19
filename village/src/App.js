import React, { Component } from "react";
import "./App.css";
import SmurfForm from "./components/SmurfForm";
import Smurfs from "./components/Smurfs";
import { Route } from "react-router-dom";
import axios from "axios";

const URL = "http://localhost:3333/smurfs";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: []
    };
  }

  componentDidMount() {
    axios
      .get(URL)
      .then(response => {
        console.log("get response:", response);
        this.setState({ smurfs: response.data });
      })
      .catch(err => {
        console.log(err);
      });
  }

  handleSetData = data => {
    console.log(data, "data");
    this.setState({ smurfs: data });
  };

  render() {
    return (
      <div className="App">
        
        
        <SmurfForm handleSetData={this.handleSetData} />
        <Route
          path="/"
          render={props => (
            <Smurfs
              {...props}
              smurfs={this.state.smurfs}
              handleSetData={this.handleSetData}
            />
          )}
        />
      </div>
    );
  }
}

export default App;
