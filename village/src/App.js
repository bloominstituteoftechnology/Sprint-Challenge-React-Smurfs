import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurf from './components/Smurf';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: []
    }
  }

  componentDidMount() {
    this.getSmurfs();
  }

  getSmurfs = () => {
    axios
      .get('http://localhost:3333/smurfs')
      .then(response => {this.setState({ smurfs: response.data })})
      .catch(err => {console.log(err)});
  }

  render() {
    return (
      <div className="App">
        <SmurfForm getSmurfs={this.getSmurfs} />
        {this.state.smurfs.map(smurf => <Smurf {...{smurf: smurf, getSmurfs: this.getSmurfs}} key={smurf.id} />)}
      </div>
    );
  }
}

export default App;
