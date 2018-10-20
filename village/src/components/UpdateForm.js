import React, { Component } from 'react';
import Axios from 'axios';
import { Redirect } from 'react-router-dom';

class UpdateForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      height: '',
      isAuth: false, 
      id: ''
    };
  }

  updateSmurf = event => {
    let id = this.state.id;
    event.preventDefault();
    Axios
      .put(`http://localhost:3333/smurfs/${id}`, {
        name: this.state.name,
        age: this.state.age,
        height: this.state.height,
        isAuth: false
 
      })
      .then(response =>
        this.setState({
          smurfs: response.data,
          name: '',
          age: '',
          height: '', 
          isAuth: true
         
        }))
      .catch(error => console.log(error, "POST ERROR"))
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  
  

  render() {
    if (this.state.isAuth) {return <Redirect to='/' />}
    return (
      <div className="SmurfForm">
        <form onSubmit={this.updateSmurf}>
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

export default UpdateForm;
