import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
const axios = require('axios')

export default class UpdateSmurf extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            age: '',
            height: '',
        }
    }
    updateSmurf = event => {
        event.preventDefault();
        let id = this.props.match.params.smurfid;
        axios.put(`http://localhost:3333/smurfs/${id}`, {id, name: `${this.state.name}`, age: `${this.state.age}`, height: `${this.state.height}`})
          .then(response => {
            console.log(response)
            this.props.refreshSmurfs()
          })
          .catch(err => {
            console.log('Error', err)
          })
      }

    handleInputChange = e => {
        this.setState({ [e.target.name]: e.target.value });
      };
    render() {
    return (
    <div>
        <form onSubmit={this.updateSmurf}>
          <input
            onChange={this.handleInputChange}
            placeholder="name"
            value={this.state.name}
            name="name"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="age"
            value={this.state.age}
            name="age"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="height"
            value={this.state.height}
            name="height"
          />
          </form>
          <h3> Are you sure you want to change this Smurf's biography? </h3>
          <NavLink to="/smurfs"> <button type="submit"> Change base stats </button> </NavLink>
    </div>
    )
}
}

            
