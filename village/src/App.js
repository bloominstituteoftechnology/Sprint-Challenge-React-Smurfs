import React, { Component } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { Route } from "react-router-dom";
import "./App.css";
import SmurfForm from "./components/SmurfForm";
import Smurfs from "./components/Smurfs";

// const blankFormValues = {
//   name: "",
//   age: "",
//   height: ""
// };

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
      smurf: {
        name: "",
        age: "",
        height: ""
      }
    };
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  componentDidMount() {
    axios
      .get("http://localhost:3333/smurfs")
      .then(response => {
        // console.log(response);
        // set our state with the new data
        this.setState({ smurfs: response.data });
      })
      .catch(err => console.log(err));
  }

  handleChange = event => {
    this.setState({
      smurf: {
        ...this.state.smurf,
        [event.target.name]: event.target.value
      }
    });
  };

  addNewSmurf = smurfs => {
    this.setState(
      {
        smurfs //shorthand for smurfs: smurfs
      },
      () => console.log(this.state)
    );
  };

  render() {
    return (
      <div className="App">
        <NavLink className="link" to="/">
          Home
        </NavLink>
        <NavLink className="link" to="/add-smurf">
          Add Smurf
        </NavLink>
        <Route
          exact
          path="/"
          render={props => <Smurfs {...props} smurfs={this.state.smurfs} />}
        />
        <Route
          path="/add-smurf"
          render={props => (
            <SmurfForm {...props} addNewSmurf={this.addNewSmurf} />
          )}
        />
      </div>
    );
  }
}

export default App;
