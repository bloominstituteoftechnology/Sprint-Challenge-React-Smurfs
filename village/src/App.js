import React, { Component } from 'react';
import {Route, Link} from 'react-router-dom';
import axios from 'axios';
import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import SmurfUpdate from './components/SmurfUpdate';
import SmurfView from './components/SmurfView';

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
  delete = (id) => {
    axios.delete(`${url}/${id}`)
    .then(response => {
        this.setState({
            smurfs: response.data
        })
    })
    .catch(error => {
      console.log(error);
    })
}
  
  
  
  render() {
    return (
      <div className="App">
        <Route exact path='/' component={Home} />
        <Route path='/add' component={SmurfForm} />
        <Route exact path='/smurfs' render={(props) => (
          <Smurfs {...props} smurfs={this.state.smurfs} delete={this.delete} />)} />
        <Route path='/smurfs/:id' render={(props) => (
          <SmurfUpdate {...props} smurfs={this.state.smurfs} delete={this.delete} />)} />
        <Route path='/smurf/:id' render={(props) => (
          <SmurfView {...props}  smurfs={this.state.smurfs} delete={this.delete} />)} />
      </div>
    );
  }
}

const Home = () => {
  return (
    <div className="home">
      <Link to='/smurfs'>The List of Smurfs</Link>
      <Link to='/add'>Add New Smurf</Link>
    </div>
  )
}
export default App;
