import React, { Component } from 'react';
import { FaPlus, FaPlusCircle } from 'react-icons/fa';

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
      this.props.addSmurf(this.state.name, this.state.age, this.state.height);
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
        <form className="container" onSubmit={this.addSmurfHandler}>
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
            <button type="submit"><FaPlusCircle/></button>
        </form>
      </div>
    );
  }
}

export default SmurfForm;
