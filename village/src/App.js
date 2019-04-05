import React, { Component } from 'react';
import './App.css';
import { Route, NavLink } from 'react-router-dom'


//import components
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';

//import ajax tool
import axios from 'axios'


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

  componentDidMount() {
    axios.get('http://localhost:3333/smurfs')
    .then( res => {
      this.setState({
        smurfs: res.data
      })
    })
    .catch( err => {
      console.log(err)
    })
  }


  render() {
    console.log(this.state.smurfs)
    return (
      <div>
        <div>
          <nav>
            <NavLink exact to='/'>
              Smurf List
            </NavLink>
            <NavLink exact to='/smurfForm'>
              Add Smurf
            </NavLink>
          </nav>
        </div>
        <div className="App">
          <Route path='/smurfForm' component={SmurfForm} />
          <Route exact path='/' 
            render={ props => <Smurfs {...props} smurfs={this.state.smurfs} />}
          />
        </div>
      </div>
    );
  }
}

export default App;
