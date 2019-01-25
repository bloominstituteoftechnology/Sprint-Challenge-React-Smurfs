import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import Header from './components/Header.js';

const urlLinks = {
  home: '/',
  smurfForm: '/smurfForm'
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
      sortedSmurfsByName: []
    };
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  componentDidMount() {
    axios
      .get('http://localhost:3333/smurfs')
      .then(res =>
        this.setState({
          smurfs: res.data,
          sortedSmurfsByName: []
        })
      )
      .catch(err => console.log(err));
  }

  updateVillage = data => {
    this.setState({ smurfs: data });
  };

  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  render() {
    return (
      <div className='App'>
        <Header urlLinks={urlLinks} />
        <Route
          path={urlLinks.smurfForm}
          render={props => (
            <SmurfForm
              {...props}
              urlLinks={urlLinks}
              smurfs={this.state.smurfs}
              updateVillage={this.updateVillage}
            />
          )}
        />

        <Route
          exact
          path={urlLinks.home}
          render={props => <Smurfs {...props} smurfs={this.state.smurfs} />}
        />
      </div>
    );
  }
}

export default App;
