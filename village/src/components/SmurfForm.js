import React, { Component } from 'react';
import axios from 'axios';

class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
      name: '',
      age: '',
      height: '',
      isUpdate: false
    };
  }

  addSmurf = (event, id) => {
    event.preventDefault();
    // const id = event.target.parentNode.id;
    // const smurf = this.state.smurfs.find(smurf => `${smurf.id}` === id);
    // add code to create the smurf using the api
    if (this.state.name && this.state.age && this.state.height){
      if (!this.state.isUpdate){
        axios
          .post('http://localhost:3333/smurfs',
                { name: this.state.name,
                  age: this.state.age,
                  height: this.state.height })
          .then(res => {this.props.handleChange(res.data)})
          .catch(err => console.log(err));
      } else{
        axios .put(`http://localhost:3333/smurfs/${id}}`, 
                { name: this.state.name,
                  age: this.state.age,
                  height: this.state.height })
              .then(res => {
                this.props.handleChange
                this.setState({ 
                  isUpdate: false}); 
              })
              .catch(err => console.log(err));
    }
      this.setState({
        name: '',
        age: '',
        height: ''
      });
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
