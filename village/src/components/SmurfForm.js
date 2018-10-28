import React, { Component } from 'react';
// import Axios from 'axios';
import Input from './Input';
import Button from './Button';

class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      height: ''
    };
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  addSmurfForm = (event)=> {
    event.preventDefault();
    const newSmurf = {
        name: this.state.name,
        age: this.state.age,
        height: this.state.height
      }
    this.props.addSmurf(newSmurf)
    this.setState({
        name: '',
        age: '',
        height: ''
      });
  }

   render() {
    return (
      <div className="SmurfForm">
        <form onSubmit={this.addSmurfForm}>
          
          <Input
            onChange={this.handleInputChange}
            placeholder="name"
            value={this.state.name}
            name="name"
          />{<br/>}
          
          <Input
            onChange={this.handleInputChange}
            placeholder="age"
            value={this.state.age}
            name="age"
          />{<br/>}
          <Input
            onChange={this.handleInputChange}
            placeholder="height"
            value={this.state.height}
            name="height"
          />{<br/>}
          <Button type="submit">Add to the village</Button>
        </form>
      </div>
    );
  }
}

export default SmurfForm;
