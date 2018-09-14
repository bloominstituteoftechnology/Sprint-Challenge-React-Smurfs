import React, { Component } from 'react';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import axios from 'axios';

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
         .then(smurfs => this.setState({smurfs: smurfs.data}))
         .catch(err => new Error(err));
  }

  postNewSmurf = (newSmurf) => {
    axios.post(`http://localhost:3333/smurfs`, newSmurf)
         .then(smurfs => this.setState({smurfs: smurfs.data}))
         .catch(err => new Error(err));
  }

  render() {
    return (
      <div className="App">
        <button onClick={() => this.props.history.goBack()}>Back</button>
        <SmurfForm postNewSmurf={this.postNewSmurf} />
        <Smurfs smurfs={this.state.smurfs} />
      </div>
    );
  }
}

export default App;
