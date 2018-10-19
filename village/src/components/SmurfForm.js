import React, { Component } from 'react';
import axios from 'axios';

const blankSmurfForm = {
  name: '',
  age: '',
  height: ''
};

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
    const newSmurf = {
      name: this.state.name,
      age: Number(this.state.age, 10),
      height: this.state.height
    };

    axios
      .post('http://localhost:3333/smurfs', newSmurf)
      .then(response => {
        this.setState({ smurfs: response.data, smurf: blankSmurfForm });
        this.props.history.push('/smurfs');
      })
      .catch(err => console.log(err));

    this.setState({
      name: '',
      age: '',
      height: ''
    });
  };

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="SmurfForm">
        <form onSubmit={this.addSmurf}>
          <div className="input-group">
            <input
              onChange={this.handleInputChange}
              value={this.state.name}
              name="name"
            />

            <label>Name</label>
          </div>
          <div className="input-group">
            <input
              onChange={this.handleInputChange}
              value={this.state.age}
              name="age"
            />

            <label>Age</label>
          </div>
          <div className="input-group">
            <input
              onChange={this.handleInputChange}
              value={this.state.height}
              name="height"
            />

            <label>Height</label>
          </div>
          <button type="submit" className="button">
            Add to the village
          </button>
        </form>
      </div>
    );
  }
}

export default SmurfForm;
