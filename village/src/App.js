import './App.css';
import React, { Component } from 'react';
import axios from "axios";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Smurfs from './components/Smurfs';
import WelcomePage from "./components/WelcomePage";

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
  axios.get('http://localhost:3333/smurfs')
  .then((response) => this.setState({smurfs: response.data}))
  .catch(error => console.log(error))
}
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={WelcomePage} />
        <Route
           path = "/smurfs"
           render={() => <Smurfs smurfs={this.state.smurfs} />}/>
      </div>
    );
  }
}

export default App;
