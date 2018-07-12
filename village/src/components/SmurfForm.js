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
      <div className="SmurfForm">
        <form onSubmit={ this.addSmurf }>
          <input
            name="name"
            placeholder=" name"
            value={ this.state.name }
            onChange={ this.handleInputChange }
          />
          <input
            name="age"
            placeholder=" age"
            value={ this.state.age }
            onChange={ this.handleInputChange }
          />
          <input
            name="height"
            placeholder=" height"
            value={ this.state.height }
            onChange={ this.handleInputChange }
          />
          <button onClick={() => { this.addSmurf }}type="submit">Add to the village</button>
        </form>
      </div>
    );
  }
}

export default SmurfForm;
