import React, { Component } from 'react';
import {Route, Link} from 'react-router-dom';
import axios from 'axios';
import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';

const url = 'http://localhost:3333/smurfs';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
    };
  }

  componentDidMount () {
   
    axios.get(url)
    .then(response => {
        this.setState({
            smurfs: response.data
        });
    })
    .catch(error => {
      console.log(error);
    })
}
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  render() {
    return (
      <div className="App">
        <Route exact path='/' component={Home} />
        <Route path='/smurfs/add' component={SmurfForm} />
        <Route exact path='/smurfs' render={(props) => (
          <Smurfs {...props} smurfs={this.state.smurfs} />)} />
      </div>
    );
  }
}

const Home = () => {
  return (
    <div className="home">
      <Link to='/smurfs'>The List of Smurfs</Link>
      <Link to='/smurfs/add'>Add New Smurf</Link>
    </div>
  )
}
export default App;
