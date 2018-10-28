import React, { Component } from "react"
import { Route, NavLink } from "react-router-dom"
import axios from "axios"

import "./App.css"
import SmurfForm from "./components/SmurfForm"
import Smurfs from "./components/Smurfs"
import SingleSmurf from "./components/SingleSmurf"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      smurfs: []
    }
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  componentDidMount() {
    axios
      .get("http://localhost:3333/smurfs")
      .then(response => {
        this.setState({
          smurfs: response.data
        })
      })
      .catch(error => {
        console.log(error)
      })
  }

  addSmurf = newSmurf => {
    // const smurfs = [...this.state.smurfs, newSmurf]
    axios
      .post("http://localhost:3333/smurfs", newSmurf)
      .then(response => {
        this.setState({
          smurfs: response.data
        })
      })
      .catch(error => {
        console.log(error)
      })
  }

  render() {
    return (
      <div className="App">
        <nav>
          <div className="nav-wrapper teal lighten-2">
            <NavLink to="/" className="brand-logo">
              Smurf City Creation
            </NavLink>
            <ul className="right">
              <li>
                <NavLink to="/">Smurfs</NavLink>
              </li>
              <li>
                <NavLink to="/smurf-form">Smurf Form</NavLink>
              </li>
            </ul>
          </div>
        </nav>
        <div className="container">
          <Route
            path="/smurf-form"
            render={props => <SmurfForm {...props} addSmurf={this.addSmurf} />}
          />
          <Route
            exact
            path="/"
            render={props => <Smurfs {...props} smurfs={this.state.smurfs} />}
          />
          <Route
            exact
            path="/smurfs/:id"
            render={props => (
              <SingleSmurf {...props} smurfs={this.state.smurfs} />
            )}
          />
        </div>
      </div>
    )
  }
}

export default App
