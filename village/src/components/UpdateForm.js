import React, { Component } from 'react';
import  axios  from 'axios';
//import { Link } from 'react-router-dom'; 

class UpdateForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      height: '',
    };

    this.uppdateSmurf = this.addSmurf.bind(this);
    this.updateName = this.updateName.bind(this);
    this.updateAge = this.updateAge.bind(this);
    this.updateHeight = this.updateHeight.bind(this);
  }

 

  updateSmurf = (event) => {
    event.preventDefault();
    // add code to create the smurf using the api
    axios.put('http://localhost:3333/smurfs', {
      name: this.state.name,
      age: this.state.age,
      height: this.state.height
    })
    .then(console.log('New Smurf Added!'))
    .catch(console.error('Smurf add failed'));
    
    
    this.setState({
      name: '',
      age: '',
      height: ''
    });
  };

  updateNewName(event) {
    this.setState({
      name: event.target.value
    });
  }

  updateNewAge(event) {
    this.setState({
      age: event.target.value
    });
  }

  updateNewHeight(event) {
    this.setState({
      height: event.target.value
    });
  }

  render() {
    return (
      <div className="SmurfForm">
        <form onSubmit={this.updateSmurf}>
          <input
            onChange={this.updateNewName}
            placeholder="NewName"
            value={this.state.name}
          />
          <input
            onChange={this.updateNewAge}
            placeholder="age"
            value={this.state.age}
          />
          <input
            onChange={this.updateNewHeight}
            placeholder="height"
            value={this.state.height}
          />
          <button type="submit"> Update this Smurf </button>
        </form>
      </div>
    );
  }
}


export default UpdateForm;