import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import SmurfForm from "./components/SmurfForm";
import Smurfs from "./components/Smurfs";
import Smurf from "./components/Smurf";

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
    axios
      .get("http://localhost:3333/smurfs")
      .then(response => {
        console.log(response);
        this.setState({ smurfs: response.data });
      })
      .catch(err => console.log(err));
  }

  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  render() {
    return <div className="App">
        <div>
          <NavLink to="/"> Village </NavLink>
        </div>
        <div>
          <NavLink to="/smurf-form"> Add a Smurf </NavLink>
        </div>
        <Route path="/smurf-form" component={SmurfForm} />
        <Smurfs smurfs={this.state.smurfs}/>
      </div>;
  }
}

export default App;
