import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      height: '',
      go: 'NO',
    };
  }

  addSmurf = event => {
    event.preventDefault();
    const smurf = {
      name: this.state.name,
      age: this.state.age,
      height: this.state.height,
    };

    const resetObj = {
      name: '',
      age: '',
      height: '',
      go: 'NO',
    }
    
    if (this.props.op === "edit") {
      axios.put(`http://localhost:3333/smurfs/${this.props.id}`, smurf)
        .then(response => this.props.update(response.data))
        .catch(error => console.log(error));
      resetObj.go = 'GO';
    } else {
      axios.post('http://localhost:3333/smurfs/', smurf)
        .then(response => this.props.update(response.data))
        .catch(error => console.log(error));
    }
    // add code to create the smurf using the api

    this.setState(resetObj);
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    if (this.state.go === "GO") {
      return <Redirect to="/smurfs" />;
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
          <button type="submit">Let's go!!!</button>
        </form>
      </div>
    );
  }
}

export default SmurfForm;
