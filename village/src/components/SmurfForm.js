import React, { Component } from 'react';
import Axios from 'axios';

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
    const smurf = {
      name: this.state.name,
      age: parseInt(this.state.age, 10),
      height: this.state.height
    }
    Axios
      .post(`http://localhost:3333/smurfs`, smurf)
        .then(response => {
          console.log(response.data)
        })
        .catch(err => {
          console.error(`Error on Post ${err}`)
        })

    this.setState({
      name: '',
      age: '',
      height: ''
    });
  }

  

  handleInputChange = event => {
    this.setState({ [event.target.name]: event.target.value });
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
          <button type="submit">Add to the village</button>
        </form>
      </div>
    );
  }
}

export default SmurfForm;
