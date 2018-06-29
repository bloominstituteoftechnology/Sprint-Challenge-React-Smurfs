import React, { Component } from 'react';
import axios from 'axios';
import { Route } from 'react-router-dom';
import Header from './components/Header';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';

const API_URL = 'http://localhost:3333/smurfs';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
    };
  }

  onAddSmurf = smurf => {
    axios
    .post(API_URL, smurf)
    .then(response => {
      console.log('posted', response);
      this.setState({ smurfs: response.data});
    })
    .catch(error => console.log(error));    
  }

  componentDidMount() {
    axios.get(API_URL)
    .then(response => {
      this.setState({smurfs: response.data});
    })
    .catch(error => {
      console.log(error);
    });
  }

  render() {
    return (
      <div className="App">
        <Route path="/" render={(props) => <Header {...props} />} />
        <Route exact path="/smurfs" render={(props) => <SmurfForm {...props} onAddSmurf={this.onAddSmurf} />} />
        <Route exact path="/smurfs" render={(props) => <Smurfs {...props} smurfs={this.state.smurfs} />} />
      </div>
    );
  }
}

export default App;
