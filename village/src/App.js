import React, { Component } from "react";
import axios from "axios";
import { Route } from "react-router-dom";

import "./App.css";
import SmurfForm from "./components/SmurfForm";
import Smurfs from "./components/Smurfs";
import NavBar from './components/NavBar';
import Smurf from './components/Smurf';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: []
    };
  }
  componentDidMount() {
    axios
      .get("http://localhost:3333/smurfs")
      .then(response => this.setState({ smurfs: response.data }))
      .catch(err => console.log(err));
  }

  addSmurfHandler = (event, newSmurf) => {
    event.preventDefault();
    axios
      .post("http://localhost:3333/smurfs", newSmurf)
      .then(response => {
        console.log(response.data);
        this.setState({ smurfs: response.data });
      })
      .catch(err => console.log(err));
  };

  deleteSmurf = smurf => {
    axios.delete(`http://localhost:3333/smurfs/${smurf.id}`)
      .then(response => this.setState({smurfs: response.data}))
      .catch(err => console.log(err))
  }

  updateSmurf = smurf => {
    axios
      .put(`http://localhost:3333/smurfs/${smurf.id}`, smurf)
      .then(response => this.setState({ smurfs: response.data }))
      .catch(error => console.log(error));
  };
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  render() {
    return (
      <div className="App">
        <Route path="/">
          <NavBar />
        </Route>
        <Route
          path="/smurf-form"
          render={props => (
            <SmurfForm {...props} addSmurfHandler={this.addSmurfHandler} />
          )}
        />
        <Route
          exact
          path="/"
          render={props => <Smurfs {...props} smurfs={this.state.smurfs} deleteSmurf={this.deleteSmurf} />}
        />
        <Route exact path="/:id" render={props => <Smurf {...props} smurfs={this.state.smurfs} updateSmurf={this.updateSmurf} />}/>
      </div>
    );
  }
}

export default App;
