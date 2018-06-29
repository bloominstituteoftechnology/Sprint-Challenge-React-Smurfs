import React, { Component } from 'react'
import './App.css'
import SmurfForm from './components/SmurfForm'
import Smurfs from './components/Smurfs'
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

  getSmurfs = () => {
    axios
      .get('http://localhost:3333/smurfs/')
      .then((res) => this.setState({ smurfs: res.data }))
      .catch((err) => console.log(err))
  }

  componentDidMount () {
    this.findSmurf()
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
              smurfs={this.state.smurfs}
            />
          )}
        />
      </div>
    )
  }
}

export default App
