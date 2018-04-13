import React, { Component } from 'react';
import axios from 'axios';
import SmurfForm from './SmurfForm';

class Smurf extends Component {
  constructor() {
    super();
    this.state = {
      showForm: false,
    };

    this.formAttributes = {
      buttonText: "Update this smurf",
      action: this.formSubmitAction
    };
  }

  deleteSmurf = e => {
    axios.delete(`http://localhost:3333/smurfs/${this.props.id}`)
      .then(response => {
        this.props.updateSmurfList(response.data);
      })
      .catch(error => console.log(error));
  }

  toggleForm = e => {
    this.setState({showForm: !this.state.showForm});
  }

  formSubmitAction = data => {
    this.toggleForm();
    axios.put(`http://localhost:3333/smurfs/${this.props.id}`, data)
      .then(response => {
        this.props.updateSmurfList(response.data);
      })
      .catch(error => console.log(error));
  }

  render() {
    return (
      <div className="Smurf">
        <h3>{this.props.name}</h3>
        <p>{this.props.age} smurf years old</p>
        <p>{this.props.height} tall</p>
        <button onClick={this.deleteSmurf}>Delete</button>
        <button onClick={this.toggleForm}>Update</button>
        <br />
        {this.state.showForm ? <SmurfForm formAttributes={this.formAttributes}/> : null }
      </div>
    );
  }
}

export default Smurf;
