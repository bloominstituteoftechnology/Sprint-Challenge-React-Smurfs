import React, { Component } from 'react';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import axios from 'axios'; /*Importing AXIOS to make AJAX requests*/

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
    };
  }

  componentDidMount(){ /*When the component loads*/
    axios.get('http://localhost:3333/smurfs').then(response => { /*Making a get request to the server to get the smurfs array*/
      this.setState({ 
        smurfs: response.data /*Setting the data retrieved from the sever to the smurfs array on the state*/
      })
    }).catch(err => {console.log(err)}); /*If there is an error, log what the error was*/
  };
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  render() {
    return (
      <div className="App">
        <SmurfForm />
        <Smurfs smurfs={this.state.smurfs} />
      </div>
    );
  }
}

export default App;
