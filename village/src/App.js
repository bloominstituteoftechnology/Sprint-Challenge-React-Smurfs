import React, { Component } from 'react'
import './App.css'
import Smurfs from './components/Smurfs'
import SmurfDetails from './components/SmurfDetails'
import { Route } from 'react-router-dom'
import axios from 'axios'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      smurfs: [],
      name: '',
      age: '',
      height: ''
    }
  }

  getSmurfs = () => {
    axios
      .get('http://localhost:3333/smurfs/')
      .then(
        (res) => this.setState({ smurfs: res.data }),
        this.setState({
          name: '',
          age: '',
          height: ''
        })
      )
      .catch((err) => console.log(err))
  }

  componentDidMount () {
    this.getSmurfs()
  }

  handleInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  addSmurf = (event) => {
    // add code to create the smurf using the api
    const newSmurf = {
      name: this.state.name,
      age: this.state.age,
      height: this.state.height
    }
    axios
      .post('http://localhost:3333/smurfs/', newSmurf)
      .then(
        (res) => this.state.getSmurfs(res.data),
        this.setState({
          name: '',
          age: '',
          height: ''
        })
      )
      .catch((err) => console.log(err))
  }

  render () {
    console.log('in app')
    return (
      <div className='App'>
        <Route
          exact
          path='/'
          render={(props) => (
            <Smurfs
              {...props}
              smurfs={this.state.smurfs}
              name={this.state.name}
              age={this.state.age}
              height={this.state.height}
              handleInputChange={this.handleInputChange}
              addSmurf={this.addSmurf}
            />
          )}
        />
        <Route
          path='/smurfs/:id'
          render={(props) => (
            <SmurfDetails
              {...props}
              smurfs={this.state.smurfs}
              getSmurfs={this.getSmurfs}
              name={this.state.name}
              age={this.state.age}
              height={this.state.height}
              handleInputChange={this.handleInputChange}
            />
          )}
        />
      </div>
    )
  }
}

export default App
