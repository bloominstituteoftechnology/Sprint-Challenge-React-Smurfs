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

  render() {
    return (
      <div className='App'>
        <div>
          <button>
            <NavLink to='/add'>Add a Smurf</NavLink>
          </button>
          <button>
            <NavLink exact to='/'>
              The Village
            </NavLink>
          </button>
        </div>
        <Route
          path='/add'
          render={props => (
            <SmurfForm {...props} updatedList={this.updatedList} />
          )}
        />
        <Route
          exact
          path='/'
          render={props => <Smurfs {...props} smurfs={this.state.smurfs} />}
        />
      </div>
    );
  }
}

export default App;
