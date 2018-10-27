import React, { Component } from 'react';
import axios from 'axios';
import { Route , NavLink } from 'react-router-dom';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
    };
  }

  componentDidMount(){
    axios
    .get('http://localhost:3333/smurfs')
    .then(response => this.setState({
      smurfs:response.data
    }))
    .catch(err => console.log(err))
  }

  // deleteSmurf = (id) =>{
  //   // event.preventDefault();
  //   Axios
  //   .delete(`http://localhost:3333/smurfs/${id}`)
  //   .then(response => this.setState({
  //     smurfs:response.data
  //   }))
  //   .catch(err => console.log(err))
  // }

  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  render() {
    return (
      <div className="App">
        <header>
          <nav>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/smurf-form'>Form</NavLink>
          </nav>
        </header>
        <Route exact path='/smurf-form' component={SmurfForm}/>
        <Route exact path='/' 
        render={(props) => <Smurfs {...props}  delete={this.deleteSmurf} smurfs={this.state.smurfs}/>}/>
      </div>
    );
  }
}

export default App;
