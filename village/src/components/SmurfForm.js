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
      const smurf = { name: this.state.name, height: this.state.height, age: this.state.age };
      axios
      .post(`http://localhost:3333/smurfs`, smurf)
      .then(saveSmurf => {
        console.log(saveSmurf);
      }) 
      .catch(err => {
        console.log(err);
      })
    this.setState({ name: '', age: '', height: '' });
    window.location.reload();
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="SmurfForm__Holder">
        <form className="SmurfForm" onSubmit={ this.addSmurf }>
          <input
            name="name"
            className="SmurfForm__Input"
            placeholder="Name"
            value={ this.state.name }
            onChange={ this.handleInputChange }
          />
          <input
            name="age"
            className="SmurfForm__Input"
            placeholder="Age"
            value={ this.state.age }
            onChange={ this.handleInputChange }
          />
          <input
            name="height"
            placeholder="Height"
            className="SmurfForm__Input"
            value={ this.state.height }
            onChange={ this.handleInputChange }
          />
        <button className="SmurfForm__Button" onClick={() => { this.addSmurf() }}type="submit">Add To The Village</button>
        </form>
      </div>
    );
  }
}

export default SmurfForm;
