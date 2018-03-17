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
    this.addSmurf = this.addSmurf.bind(this);
    this.updateId = this.updateId.bind(this);
    this.updateName = this.updateName.bind(this);
    this.updateAge = this.updateAge.bind(this);
    this.updateHeight = this.updateHeight.bind(this);
    this.deleteSmurf =  this.deleteSmurf.bind(this);
    this.updateSmurf = this.updateSmurf.bind(this);
  }



  addSmurf(event) {
    event.preventDefault();
    // add code to create the smurf using the api
    axios.post(`http://localhost:3333/smurfs`, {
        name: this.state.name,
        age: this.state.age,
        height: this.state.height
    })
    .then(() => {
      this.props.getSmurfs();
    })
    
     
    this.setState({
      id: '',
      name: '',
      age: '',
      height: ''
    });
  }


  updateSmurf(e){
    e.preventDefault();
    axios.put(`http://localhost:3333/smurfs/${this.state.id}`, {
        name: this.state.name,
        age: this.state.age,
        height: this.state.height
    })
    .then(() => {
      this.props.getSmurfs();
    })

    this.setState({
      id: '',
      name: '',
      age: '',
      height: ''
    });

  }


  deleteSmurf(e){
    e.preventDefault();
    axios.delete(`http://localhost:3333/smurfs/${this.state.id}`) 
    .then(() => {
      this.props.getSmurfs();
    })

    this.setState({
      id: '',
      name: '',
      age: '',
      height: ''
    });
  }

  




  updateId(event) {
    this.setState({
      id: event.target.value
    });
  }

  updateName(event) {
    this.setState({
      name: event.target.value
    });
  }

  updateAge(event) {
    this.setState({
      age: event.target.value
    });
  }

  updateHeight(event) {
    this.setState({
      height: event.target.value
    });
  }



  render() {
    return (
      <div className="SmurfForm">
        <form onSubmit={this.addSmurf}>
          <input
            onChange={this.updateName}
            placeholder="name"
            value={this.state.name}
          />
          <input
            onChange={this.updateAge}
            placeholder="age"
            value={this.state.age}
          />
          <input
            onChange={this.updateHeight}
            placeholder="height"
            value={this.state.height}
          />
          <input
            onChange={this.updateId}
            placeholder="ID to update or delete"
            value={this.state.id}
          />
          <button type="submit">Add to the village</button>
          <button type="button"onClick = {this.updateSmurf}>Update</button>
          <button type="button" onClick = {this.deleteSmurf}>Delete</button>
        </form>
      </div>
    );
  }
}

export default SmurfForm;