import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import { Route, Link } from 'react-router-dom';
import Smurf from './components/Smurf';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
    };
  }
  
  componentDidMount() {
    this.updateSmurf();
  }
  updateSmurf = () => {
    axios.get('http://localhost:3333/smurfs')
    .then(res => {
      this.setState({smurfs: res.data})
    })
    .catch(err => {
      console.log(err)
    })
  }

  render() {
    return (
      <div className="App">
        <Route exact path="/" render={(props) => (
          <SmurfForm  {...props} updateSmurf={this.updateSmurf} /> )} />
        <Route exact path="/smurfs" render={(props) => (
          <Smurfs {...props} updateSmurf={this.updateSmurf} smurfs={this.state.smurfs}/>)} />
        <Link to="/form"> <button>form</button> </Link>
      </div>
    );
  }
}

export default App;
