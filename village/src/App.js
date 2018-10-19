import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import axios from 'axios'
import './App.css'
import SmurfForm from './components/SmurfForm'
import Smurfs from './components/Smurfs'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      smurfs: []
    }
  }

  componentDidMount() {
    axios
      .get('/smurfs')
      .then(res => this.setState({ smurfs: res.data }))
      .catch(err => console.log(err))
  }

  render() {
    const { smurfs } = this.state

    return (
      <div className="App">
        <Route
          exact
          path="/"
          render={props => <Smurfs smurfs={smurfs} {...props} />}
        />
        <Route path="/smurf-form" component={SmurfForm} />
      </div>
    )
  }
}

export default App
