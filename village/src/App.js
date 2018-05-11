import React, { Component } from 'react';
import axios from 'axios';
import { Route } from 'react-router-dom'
import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import Header from './components/Header';
import Smurf from './components/Smurf';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
      name: '',
      age: '',
      height: '',
    };
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  componentDidMount() {
    this.fetchSmurfs()
  }

  fetchSmurfs = () => {
    axios.get('http://localhost:3333/smurfs')
      .then((response) => this.setState({ smurfs: response.data}))
      .catch(error => console.log(`${error}`))
  }

  render() {
    return (
      <div className="App">
        <Route exact path="/" component={Header}/>
        <Route  path="/smurf/:id" component={Smurf} smurfs={this.state} />
        <Route path="/smurfs" render={props => 
        <div>
          <SmurfForm />
          <Smurfs smurfs={this.state.smurfs} />
          </div>
        } />
       
    
      </div>
    );
  }
}

export default App;
