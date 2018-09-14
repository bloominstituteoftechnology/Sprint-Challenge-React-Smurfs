import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import { Route, Link } from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:3333/smurfs')
      .then(response => {
        console.log ("this is the response:", response);
        this.setState({smurfs: response.data }, () => console.log(this.state.smurfs));
      })
      .catch(error => {
        console.error('Server Error', error);
      });
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  render() {
    return (
      <div className="App">
        {/* <SmurfForm />
        <Smurfs smurfs={this.state.smurfs} /> */}

        <header>
          <h1>Welcome to the Smurf Village!</h1>
          <h3>Join us in the Smurf Village here:</h3>
          <Link to='/smurfs'>Smurf Village</Link>
          <h3>Add a new member to our Smurf Village here:</h3>
          <Link to='/smurfform'>New Smurf</Link>
        </header>

        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        
        <Route path='/smurfform' component={SmurfForm} /> 
        <Route path='/smurfs' render={props => <Smurfs {...props} smurfs={this.state.smurfs} />} />

      </div>
    );
  }
}

export default App;
