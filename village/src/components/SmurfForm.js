import React, { Component } from 'react';
import Axios from 'axios';


class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      height: ''
    };
  }

  addSmurf = () => {
    const newSmurf = {
      name: this.state.name,
      age: this.state.age,
      height: this.state.height
    }

    Axios
    .post('http://localhost:3333/smurfs', newSmurf)
    .then(res => { this.props.createSmurf(res.data)
    })
    .catch(err => console.log(err))
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
          <button type="submit">Add Smurf</button>
        </form>
      </div>
    );
  }
}

export default SmurfForm;