import React, { Component } from 'react';
import axios from 'axios';


class SmurfForm extends Component {
    state = {
      name: '',
      age: '',
      height: ''
    }

 
  
   // add code to create the smurf using the api
  addSmurf = (event) => {
    event.preventDefault();
   const newSmurf = {
      name: this.state.name,
      age: this.state.age,
      height: this.state.height}
    
    axios
    .post(this.state.URL, newSmurf)
    .then(response => {
    this.this.state.getData();
    })
    .catch((err) => console.log(err))

  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };


//   componentDidMount() {
//   axios.get(`http://localhost:3000/smurfs`).then(response => {
//       this.setState({
//          smurfs: response.data
//       });
//   });
// }

    // add code to create the smurf using the api

  

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

