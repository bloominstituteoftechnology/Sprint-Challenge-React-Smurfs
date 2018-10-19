import React, { Component } from 'react';
import axios from 'axios';

class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      height: '',
      isediting: false
    };
  }

  addSmurf = event => {
    event.preventDefault();
    // add code to create the smurf using the api
    axios.post('http://localhost:3333/smurfs', {name: this.state.name,  age: this.state.age, height:  this.state.height})
      .then((response) => this.props.newSmurf(response.data) )
      .catch((error)=> console.log(error))

    this.setState({
      name: '',
      age: '',
      height: '',
    });
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleClick =(e) => {
    e.preventDefault()
      if(this.state.isediting) {
        this.editSmurf()
      } else {
        this.addSmurf();
      }
  }

  editSmurf = () => {
    console.log('edited!');
  }

  render() {
    return (
       
      <div className="SmurfForm">
        <div>
          <h3>{ this.state.isediting ? 'Edit Smurf' : 'Add New Smurf' }</h3>
          <form onSubmit={this.addSmurf} >
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
            <button type="submit">
              {this.state.isediting ? 'Edit Smurf' : 'Add New Smurf'}
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default SmurfForm;
