import React, { Component } from 'react';
import axios from 'axios'

class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      height: ''
    };
  }

  // add = (event, objct) => {
  //  this.props.addSmurf(event, objct)
  //  this.setState({
  //   name: '',
  //   age: '',
  //   height: ''
  //  })
  // }

  
  addSmurf = () => {
   const newSmurf = {name: this.state.name, age: this.state.age, height: this.state.height}
   axios
   .post('http://localhost:3333/smurfs', newSmurf)
   .then(result => {
    this.setState({
     smurfs: result.data 
    })
   })
   .catch(err => console.log(err))
   // add code to create the smurf using the api
 }


  handleInputChange = e => {
   this.setState({ [e.target.name]: e.target.value });
 };

  render() {
    return (
      <div className="SmurfForm">
        <form onSubmit={(event) => this.addSmurf(event, {name: this.state.name, age: this.state.age, height: this.state.height} )}>
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
