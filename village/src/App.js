import React, { Component } from 'react';
import { get } from 'axios';
// for error handling with async / await
import trycatch from './utils/trycatch';
import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';

const URL = 'http://localhost:3333/smurfs'

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

  async componentDidMount() {
    const { data, error } = await trycatch(get(URL))

    if (!error) {
      const { data: smurfs } = data
      this.setState({ smurfs })
    }

    if (error) console.log('uh oh', error)
  }

  render() {
    return (
      <div className="App">
        <SmurfForm />
        <Smurfs smurfs={this.state.smurfs} />
      </div>
    );
  }
}

export default App;
