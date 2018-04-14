import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurf from './components/Smurf';
import VillageHome from './components/Village/Village';
import { Route } from 'react-router-dom';
import WelcomePage from './components/WelcomePage/WelcomePage';

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
        <Route exact path="/" component={WelcomePage} />
        <Route path="/village" render={props => <VillageHome {...{smurfs: this.state.smurfs, getSmurfs: this.getSmurfs}}/>} />
      </div>
    );
  }
}

export default App;
