import React, { Component } from 'react';
import axios from "axios";
import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import Header from './components/Header';
import {Route} from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
      updateName: "",
      updateHeight: "",
      updateAge: ""
    };
  }

  refresh() {
    console.log("test");
    axios.get("http://localhost:3333/smurfs")
    .then(response => {
      this.setState({smurfs: response.data});
      console.log(response.data);
    })
    .catch(err => console.log(err))
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
componentDidMount() {
  axios.get("http://localhost:3333/smurfs")
    .then(response => {
      this.setState({smurfs: response.data});
    })
    .catch(err => console.log(err))
}

  render() {
    return (
      <div className="App">
        <Route path="/" component={Header} />
        <Route path="/smurfs" render={() => <SmurfForm refresh={this.refresh}/>} />
        <Route path="/smurfs" render={() => <Smurfs smurfs={this.state.smurfs} updateAge={this.state.updateAge} updateHeight={this.state.updateHeight} updateName={this.state.updateName} />} />
      </div>
    );
  }
}

export default App;
