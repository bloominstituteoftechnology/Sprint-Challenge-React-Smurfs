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
    // add code to create the smurf using the api
    console.log('smurfing')
    axios.post('http://localhost:3333/smurfs', this.state)
      .then(response => this.setState({ name: this.state.name, age: this.state.age, height: this.state.height
    }))
  }
  
  handleSubmit(event) {
    event.preventDefault();
    props.handleAddNewAvenger();
    }
}

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="SmurfForm">
        <h2>You wanna add a new Smurf???</h2>
        <p>Awesome!! Tell us about this Smurf!!</p>
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
          <button type="submit" onClick={handleSubmit}>Add to the village</button>
        </form>
      </div>
    );
  }
}

export default SmurfForm;
