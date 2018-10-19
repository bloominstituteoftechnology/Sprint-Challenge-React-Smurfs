import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import SmurfForm from "./components/SmurfForm";
import Smurfs from "./components/Smurfs";
import { Route, NavLink } from "react-router-dom";
import Home from "./components/Home";
import IndividualSmurf from './components/IndividualSmurf'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
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
      })
      .catch(error => console.log(error));
  }


appSetState = (smurfs) => {
  this.setState({smurfs})
}



  deleteSmurf = (ev, id) => {
    ev.preventDefault();
    axios
      .delete(`http://localhost:3333/smurfs/${id}`)
      .then(response => this.setState({ smurfs: response.data }));
  };

  render() {
    return (
      <div className="App">
        <header className="navBar">
          <NavLink className="navLinks" to="/" exact>
            Home
          </NavLink>
          <NavLink className="navLinks" to="/village" exact>
            Village
          </NavLink>
          <NavLink className="navLinks" to="/smurf-form">
            Birth a Smurf
          </NavLink>
        </header>
        <div className="border" />

        <Route
          path="/smurf-form"
          render={props => (
            <SmurfForm
              {...props}
              appSetState={this.appSetState}
            />
          )}
        />
        <Route exact path="/" render={props => <Home {...props} />} />

        <Route
          exact
          path="/village"
          render={props => (
            <Smurfs
              {...props}
              smurfs={this.state.smurfs}
              getSmurfById={this.getSmurfById}
              deleteSmurf={this.deleteSmurf}
            />
          )}
        />

        <Route
          path="/village/:id"
          render={props => <IndividualSmurf {...props} smurfs={this.state.smurfs}/>}
          
        />
      </div>
    );
  }
}

export default App;
