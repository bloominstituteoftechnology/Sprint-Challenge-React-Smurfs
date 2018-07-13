import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
      name: '',
      age: '',
      height: ''
    };
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.

  componentDidMount() {
    axios
      .get('http://localhost:3333/smurfs')
      .then(response => {
        console.log(response);
        this.setState({ smurfs: response.data })
      })
      .catch(err => {
        console.log(err)
      })
  }

  smurfName = e => {
    this.setState({ name: e.target.value })
  }

  smurfAge = e => {
    this.setState({ age: Number(e.target.value) })
  }

  smurfEmail = e => {
    this.setState({ height: e.target.value })
  }

  newSmurf = () => {
    const smurf = { name: this.state.name, age: this.state.age, height: this.state.height }
    axios.post('http://localhost:5000/friends', smurf)
      .then(response => this.setState({ smurfs: response.data }))
      .catch(error => console.log(error));
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
