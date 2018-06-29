import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'

import axios from 'axios';
const URL = 'http://localhost:3333/smurfs';

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
    axios
      .post(URL, {name: this.state.name, age: this.state.age, height: this.state.height})
      .then(response => { this.props.addSmurf(response.data)}
      )
      .catch(error => console.log(error));
      this.setState({
        name: '',
        age: '',
        height: ''
      });
    this.props.history.push('/');
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const StyledLink = styled(Link)`
    color: white;
    font-size: 20px;
    font-weight: bold;
    display: inline-block;
    padding: 10px 20px;
    margin-left: 10px;
    text-decoration: none;
    background-color: black;  
    text-transform: capitalize;
    &:hover{
      color: blue;
    }
`;

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
          <StyledLink to="/smurfs">Cancle</StyledLink>

        </form>
      </div>
    );
  }
}

export default SmurfForm;
