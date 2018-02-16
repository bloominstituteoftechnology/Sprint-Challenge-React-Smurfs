import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';

class App extends Component {
  state = {
    smurfs: [],
    loading: true,
  }

  render() {
    return (
      <div className="App">
        <SmurfForm smurfs={this.state.smurfs} loading={this.state.loading} loadSmurfs={this.loadSmurfs}/>
        <Smurfs smurfs={this.state.smurfs} loading={this.state.loading} />
      </div>
    );
  }

  componentDidMount() {
    this.loadSmurfs();
  }

  loadSmurfs = () => {
    this.setState({ loading: true })
    axios.get('http://localhost:3333/smurfs')
    .then((response) => {
      this.setState({ smurfs: response.data, loading: false });
      console.log(this.state.smurfs)
    })
    .catch((err) => {
      this.setState({ loading: false });
      console.error('Error', err);
    })
  }
}

export default App;
