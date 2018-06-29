import React, { Component } from 'react';
import {BrowserRouter as Router, Link} from 'react-router-dom';
import axios from 'axios';

import SmurfForm from './SmurfForm';
import Smurfs from './Smurfs';

const URL = "http://localhost:3333/smurfs";

class Village extends Component {
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
      .get(URL)
      .then(response => {
        this.setState({smurfs: response.data})
      })
      .catch(err => console.log(err)) 
  }

  render() {
    return (
      <div className="App">
      <Router>
        <Link to="/" onClick={() => window.location.reload()}>Leave the Village</Link>
      </Router>
        <SmurfForm URL={URL} />
        <Smurfs smurfs={this.state.smurfs} />
      </div>
    );
  }
}

export default Village;
