import React, { Component } from 'react';
import axios from 'axios';
import {Route} from 'react-router-dom';
import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import Header from './components/Header';

const URL = 'http://localhost:3333/smurfs';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      smurfs: [],
    };
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.

  handleSubmitSmurf = smurf => {

    axios
      .post(URL, smurf)
      .then(response => {
        this.setState({smurfs: response.data});
      })
      .catch(error => {
        console.log(error);
      });
  }

  componentDidMount() {
    axios
      .get(URL)
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

        <Route exact path="/" render={props => <Header {...props} />} />

        <Route path="/smurfs" render={props => {
          return (
            <div>
              <SmurfForm {...props} handleSubmitSmurf={this.handleSubmitSmurf} />
            </div>
          );
        }}/>

        <Route path="/smurfs" render={props => {
          return (
            <div>
            <Smurfs {...props} smurfs={this.state.smurfs}/>
            </div>
          );
        }}/>
        
      </div>
    );
  }
}

export default App;
