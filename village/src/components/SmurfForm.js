import React, { Component } from 'react';
import axios from 'axios';

class SmurfForm extends Component {
  constructor(props) {
    console.log(props);
    super(props);
    this.state = {
      name: '',
      age: '',
      height: '',
      id: '',
      maxId: props.maxId
    };
    //let onClick = props.onClick;
  }

  clearInputText = () => {
    this.setState({
      name: '',
      age: '',
      height: '',
      id: ''
    });
  }

  addSmurf = event => {
    event.preventDefault();
    // add code to create the smurf using the api

    if (this.state.name === '' || this.state.email === '' || this.state.age === '') {
      this.clearInputText();
      return
    }else{
      let id = this.state.id +1;
      let smurf = {
        id: this.state.maxId,
        name: this.state.name,
        age: this.state.age,
        height: this.state.height
      }
      console.log(smurf.id + ' ' + smurf.name + ' ' + smurf.age + ' ' + smurf.height);
      axios
      .post('http://localhost:3333/smurfs', smurf )
      .then(response => {
        console.log(response);
        this.clearInputText();
        this.setState({
          maxId: id
        });

        this.props.onClick();

      })
      .catch(err => console.log(err));
    }
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
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
          <button type="submit" >Add to the village</button>
        </form>
      </div>
    );
  }
}

export default SmurfForm;
