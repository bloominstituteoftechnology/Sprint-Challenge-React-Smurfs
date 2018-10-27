import React, { Component } from 'react';
import { Route }from 'react-router-dom';
import axios from "axios";

import styled from 'styled-components';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import NavBar from './components/NavBar';

const AppDiv = styled.div`
  text-align: center;
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
    };
  }

  componentDidMount = () => {
    axios.get('http://localhost:3333/smurfs')
      .then(response => {
        this.setState({ smurfs: response.data });
      })
      .catch ( err => {
        console.log('I have hit the following Error: ', err);
      });
  }

  deleteSmurf = (id) => {
    return () => {
      axios.delete(`http://localhost:3333/smurfs/${id}`)
        .then( response => {
          this.setState({ smurfs: response.data });
        })
        .catch( err => console.log(err));
    }
  }


  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  render() {
    return (
      <AppDiv>
        <NavBar />

        <Route exact path='/' component={SmurfForm} />
        <Route exact path='/' render={props =>
          <Smurfs {...props} smurfs={this.state.smurfs} deleteSmurf={this.deleteSmurf} />
        } />

        <Route path='/SmurfForm' component={SmurfForm} />
        {/* <Route path='/smurfs/:id' render={props =>
          <Smurf {...props} />
        } /> */}
        {/* Still need to get Smurf card to render properly */}
      </AppDiv>
    );
  }
}

export default App;