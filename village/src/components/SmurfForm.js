import React, { Component } from 'react';
import axios from 'axios';

const blankFormValues = {
  name: '',
  age: '',
  height: '',
}

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
    //event.preventDefault();
    // add code to create the smurf using the api
    axios
      .post('http://localhost:3333/smurfs', this.state)
      .then(response => {
        this.setState({
          name: '',
          age: '',
          height: ''
    });
  })}

  handleUpdateSmurf = smurfId => {
    axios.put(`http://localhost:3333/smurfs/${smurfId}`, this.state)
    .then(response => {
      this.setState({
        blankFormValues
      });
    this.props.history.push(`/smurfs/${smurfId}`);
  });
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
          <button type="submit">Add to the village</button>
        </form>
      </div>
    );
  }
}

export default SmurfForm;
