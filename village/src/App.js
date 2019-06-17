import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import { Route, NavLink } from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: []
    };
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  componentDidMount() {
    axios
      .get('http://localhost:3333/smurfs')
      .then(res =>
        this.setState({
          smurfs: res.data
        })
      )
      .catch(err => console.log(err));
  }

  updatedList = newSmurf => {
    this.setState({ smurfs: newSmurf });
  };

  deleteSmurf = (e, id) => {
    e.preventDefault();
    axios
      .delete(`http://localhost:3333/smurfs/${id}`)
      .then(res => {
        this.setState({ smurfs: res.data });
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className='App'>
        <nav>
          <h1>SMURF REACT VILLAGE</h1>
          <div className='nav-link'>
            <NavLink to='/add'>Add a Smurf</NavLink>
          </div>
          <div className='nav-link'>
            <NavLink exact to='/'>
              The Village
            </NavLink>
          </div>
        </nav>
        <Route
          path='/add'
          render={props => (
            <SmurfForm {...props} updatedList={this.updatedList} />
          )}
        />
        <Route
          exact
          path='/'
          render={props => (
            <Smurfs
              {...props}
              smurfs={this.state.smurfs}
              deleteSmurf={this.deleteSmurf}
            />
          )}
        />
      </div>
    );
  }
}

export default App;
