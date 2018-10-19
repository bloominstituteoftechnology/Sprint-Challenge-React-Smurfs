import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import { Route } from 'react-router-dom';

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
        this.setState(() => ({ friendList: response.data }));
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
        <Route exact path='/' component={Smurfs} />
        <Route path='/smurf-form' component={SmurfForm} />   
      </div>
    );
  }
}



export default App;
/*
Then declare your routes with Route.
Then make it so you can navigate to your routes using Link.
Create two routes in your App component, 
one at '/' for your Smurfs component, and one at /smurf-form for your form.
Then in your App component,
 create a nav bar that will use NavLink to route to your different pages.
   <SmurfForm smurfs={this.state.smurfs} />
        <Smurfs smurfs={this.state.smurfs} />

            <Route exact path='/' component={Smurfs} />
      <Route path='/smurf-form' component={SmurfForm} />   
 */