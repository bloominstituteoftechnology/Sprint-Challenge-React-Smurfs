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
    };
  }

  componentDidMount() {
      axios.get('http://localhost:3333/smurfs')
            .then(res => this.setState({smurfs: res.data}))
            .catch(err => console.log(err));
  }

  updateSmurfs = newSmurfs => {
    this.setState({smurfs: newSmurfs});
  }

  render() {
    return (
      <div className="App">
        <SmurfForm update={this.updateSmurfs} />
        <Smurfs smurfs={this.state.smurfs} />
      </div>
    );
  }
}

export default App;
