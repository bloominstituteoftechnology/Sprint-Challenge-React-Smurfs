import React, { Component } from 'react';
import axios from 'axios';

class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      height: '',
      isUpdate: false
    };
  }

  addSmurf = event => {
    event.preventDefault();
    // add code to create the smurf using the api
    if (this.state.name && this.state.age && this.state.height){
      if (!this.state.isUpdate){
          axios .post('http://localhost:3333/smurfs', 
                    { name: this.state.name,
                      age: this.state.age,
                      height: this.state.height })
                .then(response => {this.props.handleCreateOrUpdate })
                .catch(err => console.log(err));
      } else{
          axios .put(`http://localhost:5000s/${this.state.id}`, 
                  { name: this.state.name,
                    age: this.state.age,
                    height: this.state.height })
                .then(response => {
                  this.props.handleCreateOrUpdate
                  this.setState({ isUpdate: false}); })
                .catch(err => console.log(err));
      }
      this.props.componentDidMount;
      this.setState({
        name: '',
        age: '',
        height: ''
      });
    }
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

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
          <button type="submit" onClick={this.props.handleCreateOrUpdate}>Add to the village</button>
        </form>
      </div>
    );
  }
}

export default SmurfForm;
