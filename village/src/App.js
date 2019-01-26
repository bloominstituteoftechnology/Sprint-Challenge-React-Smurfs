import React, { Component } from 'react';
import Axios from 'axios';

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
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  componentDidMount() {
    Axios.get('http://localhost:3333/smurfs')
    .then(response => {
      console.log(response)
      this.setState({smurfs: response.data})
    })
    .catch(error => {
      console.log(error)
    })
  }
  postSmurf = (newSmurf) => {
    Axios.post('http://localhost:3333/smurfs', newSmurf)
    .then(response => {
      let newSmurfsList = this.state.smurfs;
      newSmurfsList.push(newSmurf)
      this.setState({smurfs: newSmurfsList})
    })
    .catch(error => {
      console.log(error);
    })
  }

  render() {
    return (
      <div className="App">
        <SmurfForm postSmurf={this.postSmurf}/>
        <Smurfs smurfs={this.state.smurfs} />
      </div>
    );
  }
}

export default App;
