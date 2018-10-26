import React, { Component } from 'react';
import Axios from 'axios';
import { Route } from 'react-router-dom';
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
    Axios.get(`http://localhost:3333/smurfs`)
        .then(res => this.setState({smurfs: res.data}))
          .then(() => console.log(this.state.smurfs))
          .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="App">
        <Route exact path='/smurf-form' render= {(props) => (
          <SmurfForm
            {...props} />
        )}/>
        <Route exact path='/' render= {(props) => (
          <Smurfs
            {...props}
            smurfs={this.state.smurfs} />
        )}/>
      </div>
    );
  }
}

export default App;
