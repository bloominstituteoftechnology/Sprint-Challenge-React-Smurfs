import React, { Component } from 'react';
import axios from 'axios';

class UpdateSmurf extends Component {
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
    let newSmurf = {
      name: this.state.name,
      age: this.state.age,
      height: this.state.height,
    }
    axios
    .post('http://localhost:3333/smurfs', newSmurf)
    .then(reponse =>
      alert('Welcome '+ newSmurf.name + ' to the village!'),
    )
    .catch(error => console.error('UpdateSmurf Error', error))

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
    console.log()
    return (
      <div className="UpdateSmurf">
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

export default UpdateSmurf;
