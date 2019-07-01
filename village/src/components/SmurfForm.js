import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios'

class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      height: ''
    };
  }

  addSmurf = event => {
    event.preventDefault();
    // add code to create the smurf using the api
    const { name, age, height } = this.state
    const payload = {name, age, height}
    
    axios.post('http://localhost:3333/smurfs', payload)
      .then((response) => {
        console.log("smurf added", response.data)
        this.props.updateSmurfs(response.data)
      })
      .then(() => {
        this.props.history.push("/")
      })
      .catch(error => {
        console.log("Error occurred", error)
      })

    this.setState({
      name: '',
      age: '',
      height: ''
    });
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="SmurfForm">
        <form onSubmit={this.addSmurf}>
          <h3>Add New Smurf</h3>
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
          <button type="submit">Add to the village</button>
        </form>
        <Link to="/">Home</Link>
      </div>
    );
  }
}

export default SmurfForm;
