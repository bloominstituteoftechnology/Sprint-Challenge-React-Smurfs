import React, { Component } from 'react'
import './App.css'
import SmurfForm from './components/SmurfForm'
import Smurfs from './components/Smurfs'
import Smurf from './components/Smurf'
import SmurfDetails from './components/SmurfDetails'
import { Route } from 'react-router-dom'
import axios from 'axios'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      smurfs: []
    }
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  getSmurfs = () => {
    axios
      .get('http://localhost:3333/smurfs/')
      .then((res) => this.setState({ smurfs: res.data }))
      .catch((err) => console.log(err))
  }

  componentDidMount () {
    this.getSmurfs()
  }

  findSmurf = (id) => {
    this.state.smurfs.find((smurf) => smurf.id === id)
  }

  render () {
    return (
      <div className='App'>
        <SmurfForm getSmurfs={this.getSmurfs} />
        <Route
          exact
          path='/'
          render={(props) => <Smurfs {...props} smurfs={this.state.smurfs} />}
        />
        <Route
          path='/smurfs/:id'
          render={(props) => (
            <SmurfDetails
              {...props}
              findSmurf={() => this.findSmurf(props.match.params.id)}
            />
          )}
        />
      </div>
    )
  }
}

export default App
