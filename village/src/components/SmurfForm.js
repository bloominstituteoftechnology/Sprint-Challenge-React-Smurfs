import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
import axios from 'axios';

class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      height: '',
      redirect: false
    };
  }

  addSmurf = event => {
    event.preventDefault();
    let {name, age, height} =this.state
    // add code to create the smurf using the api
    axios
      .post(`http://localhost:3333/smurfs`, {name , age , height})
      .then(response => {
        this.props.sendFormData(response.data)
      })
      .catch(error => {
        console.error('Server Error', error)
      })

    this.setState({
      name: '',
      age: '',
      height: '',
      redirect: true
    });
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    if (this.state.redirect) {
      return <Redirect to="/" />
    }
    return (
      <div className="SmurfForm">
        <form onSubmit={this.addSmurf}>
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
      </div>
    );
  }
}

export default SmurfForm;
