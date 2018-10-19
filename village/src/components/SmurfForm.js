import React, { Component } from 'react';
import Axios from 'axios';
import { Redirect } from 'react-router-dom';

class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      height: '',
      isAuth: false
    };
  }

  addSmurf = event => {
    const { name, age, height } = this.state;
    event.preventDefault();
    
    Axios
      .post('http://localhost:3333/smurfs', {
        name: name,
        age: age,
        height: height,
      })
      .then(
        this.setState({
          name: '',
          age: '',
          height: '',
          isAuth: true
      }))
      .catch( error => console.log(error, "POST ERROR"))
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  
  

  render() {
    if (this.state.isAuth) {return <Redirect to='/' />}
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
          <button className="btn" type="submit">Add Smurf</button>
        </form>
      </div>
    );
  }
}

export default SmurfForm;
