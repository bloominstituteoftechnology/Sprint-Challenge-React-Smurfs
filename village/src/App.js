import React, { Component } from 'react';
import axios from "axios";

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
    };
  }

  componentDidMount() {
    axios.get('http://localhost:3333/smurfs')
      .then(response => {
        this.setState({ smurfs: response.data })
      })
      .catch(err => {
        console.log(`This data is all smurfed up: ${err}`)
      })
  }

  passState = (data) => {
    this.setState({
      smurfs: data
    });
  }
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  render() {
    return (
      <div className="App">
        <SmurfForm passState={this.passState} />
        <Smurfs smurfs={this.state.smurfs} />
      </div>
    );
  }
}

export default App;
