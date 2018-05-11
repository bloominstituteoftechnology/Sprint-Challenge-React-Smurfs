import React, { Component } from 'react';
import axios from 'axios';
import { Route, Link } from 'react-router-dom';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import Smurf from './components/Smurf';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
    };
  }

  componentDidMount() {
    this.updateInfo();
  }

  updateInfo = () => {
    axios
      .get('http://localhost:3333/smurfs')
      .then((response) => { 
        this.setState({smurfs: response.data})
      })
      .catch(err => {
        console.log(err)
      })
  }


  render() {
    return (
      <div className="App">
        <Route exact path="/" component={Home}/>
        <Route path="/smurfs" render={(props) => (
            <SmurfForm {...props} updateInfo={this.updateInfo} />  )}/>
        <Route exact path = "/smurfs" render={(props) => (
            <Smurfs {...props} updateInfo={this.updateInfo} smurfs={this.state.smurfs} />  )}/>
      </div>
    );
  }
}

const Home = () => {
  return (
    <div>
      <h1>Welcome To Smurf Village</h1>
      <Link to="/smurfs">Enter Village</Link>
      <Route path="/smurfs" component={App}/>
    </div>
  )
}

export default App;
