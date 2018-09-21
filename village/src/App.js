import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import SmurfForm from "./components/SmurfForm";
import Smurfs from "./components/Smurfs";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

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
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.

  componentDidMount() {
    // fetch data from the api
    console.log("inside didmount");
    axios
      .get("http://localhost:3334/smurfs")
      .then(response => {
        console.log(response);
        // set our state with the new data
        this.setState({
          smurfs: response.data,
          name: "",
          age: "",
          height: ""
        });
      })
      .catch(err => console.log(err));
  }

  handleInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    return (
      <div className="App">
        <ul className="navbar">
          <li>
            <NavLink exact to="/" activeClassName="activeNavButton">
              Smurfs
            </NavLink>
          </li>
          <li>
            <NavLink to="/smurfs/add" activeClassName="activeNavButton">
              Add a Smurf
            </NavLink>
          </li>
        </ul>

        <Route
          exact
          path="/"
          render={props => <Smurfs smurfs={this.state.smurfs} />}
        />
        <Route path="/smurfs/add" render={props => <SmurfForm />} />
      </div>
    );
  }
}

export default App;
