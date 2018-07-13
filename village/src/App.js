import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import {Route} from 'react-router-dom';
import Header from './components/Header';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
      errorMessage: null
    };
  }
  componentDidMount(){
    axios.get('http://localhost:3333/smurfs')
    .then(response => {
      console.log(response);
      this.setState({smurfs: response.data, errorMessage: null});
    })
    .catch(err => {this.setState({errorMessage: "Missing Smurf!"})
  })
};

setSmurf = data => this.setState({smurfs: data});
setErrorHandler = error => {this.setState({errorMessage: error})
setTimeout(() => {
  this.setState({errorMessage: null})
}, 2500)
};

  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  render() {
    return (
      <div className="App">
      <Route exact path="/" component={Header}/>
      <Route path="/smurfs" render={props => <Smurfs {...props} 
      smurfs={this.state.smurfs} 
      setSmurf={this.setSmurf} 
      setErrorHandler={this.setErrorHandler}/>}
      />
      {this.state.errorMessage !== null ? 
      (<span>{this.state.errorMessage}</span>) : null}
      <Smurfs smurfs={this.state.smurfs} />
      </div>
    );
  }
}

export default App;
