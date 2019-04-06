import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import axios from 'axios'

import Nav from './components/nav/nav'
import SmurfForm from './components/SmurfForm'
import Smurfs from './components/Smurfs'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      smurfs: [],
      serverUrl: 'http://localhost:3333/smurfs',
    };
  }
  componentDidMount = () =>
    axios
      .get(this.state.serverUrl)
      .then(smurfs => this.setState({smurfs: smurfs.data}))
      .catch(err => console.log('Error getting smurfs: ', err))

  addSmurf = smurf => {
    axios
      .post(this.state.serverUrl, smurf)
      .then(res => this.setState({smurfs: res.data}))
      .catch(err => console.log('Error adding smurf:', err))
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  render() {
    console.log(this.state.smurfs)
    return (
      <div className="App">
        <Nav />
        <Route exact path='/' render={ props => <Smurfs {...props} smurfs={this.state.smurfs} />}/>
        <Route path='/add' render={props => <SmurfForm {...props} add={this.addSmurf} />}/>
      </div>
    );
  }
}

export default App