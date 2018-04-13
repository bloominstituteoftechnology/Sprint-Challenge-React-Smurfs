import React, { Component } from 'react';
import axios from 'axios';

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
    axios.post("http://localhost:3333/smurfs", this.state)
      .then(response => {
        this.props.updateSmurfList(response.data);
      })
      .catch((error => console.log(error)));

  }

  handleFormSubmit = (e) => {
    e.preventDefault();
    this.props.formAttributes.action(this.state);
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
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
          {/* {this.props.hasOwnProperty('button') ? this.props.button : ''} */}
          {/* <button type="submit" onClick={this.addSmurf}>Add to the village</button> */}
          <button type="submit" onClick={this.handleFormSubmit}>{this.props.formAttributes.buttonText}</button>
        </form>
      </div>
    );
  }
}

export default SmurfForm;
