import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      height: ''
    };
  }

  addSmurfHandler = event => {
    event.preventDefault();
    // add code to create the smurf using the api
const smurf ={
  name: this.state.name,
  age: this.state.age,
  height: this.state.height
}
    this.props.addNewSmurf(smurf);
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
        <NavLink className="link" to='/'>
          <p>Click Here To Go Back To Smurf Village.</p>
        </NavLink>
        <form onSubmit={this.addSmurfHandler}>
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
