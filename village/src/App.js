import React, { Component } from "react";
import axios from "axios";
import { Route, Switch, withRouter } from "react-router-dom";
import "./App.css";
import SmurfForm from "./components/SmurfForm";
import Smurfs from "./components/Smurfs";
import Header from './components/Header';

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

  /* 
    get data from locakhost at port 3335
    with the endpoint smurfs when the 
    component has mounted. 
  */
  componentDidMount() {
    axios
      .get("http://localhost:3333/smurfs/")
      .then(res => {
        this.setState({ smurfs: res.data });
      })
      .catch(error => {
        console.err(error);
      });
  }
  //method to add a smurf to the state
  addSmurf = event => {
    event.preventDefault();
    // add code to create the smurf using the api
    const newSmurf = {
      name: this.state.name,
      age: this.state.age,
      height: this.state.height
    };
    axios
      .post("http://localhost:3333/smurfs", newSmurf)
      .then(response => {
        this.setState({
          smurfs: response.data,
          name: "",
          age: "",
          height: ""
        });
      })
      .catch(error => {
        console.log(error);
      });
    this.setState({
      name: "",
      age: "",
      height: ""
    });
    this.props.history.push(`/`);
  };

  render() {
    //TODO: refactor this to feel more intuitive
    return (
      <div className="App">
        <Header />
      
          <SmurfForm />

        <Route
          exact
          path="/"
          render={props => <Smurfs smurfs={this.state.smurfs} />}
        />
      </div>
    );
  }
}

export default withRouter(App);
