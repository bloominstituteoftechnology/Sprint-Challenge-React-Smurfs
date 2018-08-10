import React, { Component } from 'react';
import axios from 'axios';

let API_URL = "http://localhost:3333/smurfs";

class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      height: ''
    };
  }

  // addSmurf = event => {
  //   axios.post(`${API_URL}`, this.state)

  //   this.setState({
  //     name: '',
  //     age: '',
  //     height: ''
  //   });
  // }

  // <form onSubmit={this.addSmurf}>


  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    return (
      <div className="SmurfForm">
        <form onSubmit={ e => {
          e.preventDefault();
          this.props.onActualAddSmurf(this.state);
          this.setState({name: '', age: '', height: ''});
        }}>
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
