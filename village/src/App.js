import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
hello world!
class App extends Component {
  constructor() {
    super();
    this.state = {
      smurfs: []
    };
  }

  componentDidMount() {
    axios.get('http://localhost:3333/smurfs')
    .then(resp => this.setState({smurfs: resp.data}))
    .then(result => console.log('success'))
    .catch(err => console.log(err));
  }

  update =(smurf) => {
    this.setState({ smurfs: [...this.state.smurfs, smurf] })
  }

  render() {
    return (
      <div className="App">
        <SmurfForm update={this.update} />
        <Smurfs smurfs={this.state.smurfs} />
      </div>
    );
  }
}

export default App;
