import React, { Component } from 'react';
import axios from 'axios';
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
        <SmurfForm onAddSmurf={this.onAddSmurf} />
        <Smurfs smurfs={this.state.smurfs} />
      </div>
    );
  }
}

export default App;
