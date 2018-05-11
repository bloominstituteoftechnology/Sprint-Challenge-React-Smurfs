import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './SmurfForm.css'

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

    const newSmurf = {
      name: this.state.name,
      age: this.state.age,
      height: this.state.height
    }
    
    axios 
      .post('http://localhost:3333/smurfs', newSmurf)
      .then((res) => {
        this.props.updateInfo();
      })
      .catch(err => console.log(err))

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
        <form onSubmit={this.addSmurf}>
          <input 
            className="input-styles"
            onChange={this.handleInputChange}
            placeholder="name"
            value={this.state.name}
            name="name"
          />
          <input
            className="input-styles"
            onChange={this.handleInputChange}
            placeholder="age"
            value={this.state.age}
            name="age"
          />
          <input
            className="input-styles"
            onChange={this.handleInputChange}
            placeholder="height"
            value={this.state.height}
            name="height"
          />
          <button className="submitBtn" onClick={this.addSmurf} type="submit">Add Smurf</button>
        </form>
      </div>
    );
  }
}


export default SmurfForm;
