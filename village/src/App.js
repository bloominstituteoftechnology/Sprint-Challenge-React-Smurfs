import React, { Component } from "react";
import axios from "axios";
import { Route, NavLink, withRouter } from "react-router-dom";
import "./App.css";
import SmurfForm from "./components/SmurfForm";
import Smurfs from "./components/Smurfs";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: []
    };
    console.log(this.state.smurfs);
  }

  componentDidMount() {
    axios.get("http://localhost:3333/smurfs").then(res => this.setState({ smurfs: res.data }));
  }

  addSmurf = (e, newFriend) => {
    e.preventDefault();
    // add code to create the smurf using the api
    axios
      .post("http://localhost:3333/smurfs", newFriend)
      .then(res => this.setState({ smurfs: res.data }))
      .catch(err => console.log(err));
  };

  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  render() {
    return (
      <div className="App">
        <nav>
          <NavLink to="/smurfs">Smurf Village</NavLink>
          <NavLink to="/smurf-form">Add a Smurf</NavLink>
        </nav>
        <Route path="/smurf-form" render={props => <SmurfForm {...props} addSmurf={this.addSmurf} />} />
        <Route exact path="/smurfs" render={() => <Smurfs smurfs={this.state.smurfs} />} />
      </div>
    );
  }
}

export default withRouter(App);
