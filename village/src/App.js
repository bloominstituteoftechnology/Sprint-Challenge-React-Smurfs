import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Header from './components/Header';

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
  this.fetchFriends();
  }

fetchFriends = () => {
    axios
      .get(`http://localhost:3333/smurfs`)
      .then(response => {
        this.setState(() => ({ smurfs: response.data }));
      })
      .catch(error => {
        console.error(error);
      });
  };


  render() {
    return (
      <div className="App">
        <Route exact path="/form" component={SmurfForm} />
        <Route exact path="/" component={Header } />
        <Route path="/smurfs" render={props => (
          <Smurfs {...props} smurfs={this.state.smurfs}/>
          )}
        />
        <Link to = "/form">
          <button>form</button>
        </Link>
        <Link to = "/">
          <button>Home</button>
        </Link>
        
        <Smurfs smurfs={this.state.smurfs} />
      </div>
    );
  }
}

export default App;
