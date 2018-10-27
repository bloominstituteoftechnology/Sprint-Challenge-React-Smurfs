import React, { Component } from 'react';
import axios from 'axios';

class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = { /*Setting the state to have the properties name, age and height to use to save a new smurf*/
      name: '',
      age: '',
      height: ''
    };
  }

  addSmurf = event => { /*Event that runs when the submit button is entered to add a new smurf and sends their information to the array*/
    event.preventDefault();
    // add code to create the smurf using the api

    axios.post('http://localhost:3333/smurfs', { /*Sending the inputted information to the server to be added to the array on the server*/
      name: this.state.name,
      age: this.state.age,
      height: this.state.height
    })

    this.setState({ /*Sets the state to be cleared after the smurf is done being added to the village*/
      name: '',
      age: '',
      height: ''
    });
  }

  handleInputChange = e => { /*Reusable function that updates the values of a property in the state and can be used for any key value pair passed with the event*/
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="SmurfForm">
        <form onSubmit={this.addSmurf}>
          <input
            onChange={this.handleInputChange} /*Runs handle input change when the field is typed into the set the correlating property in state to be whatever is entered*/
            placeholder="name"
            value={this.state.name} /*Changing the name property in state to be what is entered in the input field*/
            name="name"
          />
          <input
            onChange={this.handleInputChange} /*Runs handle input change when the field is typed into the set the correlating property in state to be whatever is entered*/
            placeholder="age"
            value={this.state.age} /*Changing the age property in state to be what is entered in the input field*/
            name="age"
          />
          <input
            onChange={this.handleInputChange} /*Runs handle input change when the field is typed into the set the correlating property in state to be whatever is entered*/
            placeholder="height"
            value={this.state.height} /*Changing the height property in state to be what is entered in the input field*/
            name="height"
          />
          <button type="submit">Add to the village</button>
        </form>
      </div>
    );
  }
}

export default SmurfForm;
