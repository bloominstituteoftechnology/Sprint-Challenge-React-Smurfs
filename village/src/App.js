import React, { Component } from 'react';
import axios from 'axios';
import { Route, NavLink } from 'react-router-dom';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';

const url = 'http://localhost:3333/smurfs';

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
    axios
      .get(url)
      .then(res => {
        // console.log(res);
        this.setState({
          smurfs: res.data,
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  addNewSmurf = newSmurf => {
    axios
      .post(url, newSmurf)
      .then(res => {
        // console.log(res);
        this.setState({
          smurfs: res.data,
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  deleteSmurf = id => {
    axios
    .delete(`${url}/${id}`)
    .then(res => {
      console.log(res);
      this.setState({
        smurfs: res.data,
      });
    })
    .catch(err => {
      console.log(err);
    });
  }

  updateSmurf = (id, data) => {
    axios
      .put(`${url}/${id}`, data) 
      .then(res => {
        console.log(res);
        this.setState({
          smurfs: res.data,
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div className="App">

        <nav>
          <NavLink to='/' className='navBarLink' activeClassName="active">
            Smurf Village
          </NavLink>
          <NavLink to='/smurf-form' className='navBarLink' activeClassName="active">
            Smurf Form
          </NavLink>
        </nav>

        <Route exact path='/smurf-form' 
          render={props => 
            <SmurfForm 
              {...props} 
              addNewSmurf={this.addNewSmurf}
            />
          }
        />

        <Route path={`/smurf-form/edit/:id`} 
          render={props =>
            <SmurfForm 
              {...props}
              updateSmurf={this.updateSmurf}
              edit
            />
          }
        />
        
        <Route exact path='/'
          render={props => 
            <Smurfs 
              {...props} 
              smurfs={this.state.smurfs} 
              deleteSmurf={this.deleteSmurf}
            />
          }
        />

        <Route exact path={`/smurf/:id`}
          render={props => 
            <Smurfs
              {...props}
              smurfs={this.state.smurfs}
              clicked
            />
          } 
        />

      </div>
    );
  }
}

export default App;
