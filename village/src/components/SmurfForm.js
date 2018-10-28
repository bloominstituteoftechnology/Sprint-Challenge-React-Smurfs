import React, { Component } from 'react';
import axios from 'axios';
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

  addSmurf = (event) => {
   event.preventDefault()
    // add code to create the smurf using the api
    const smurfObj = {
       name: this.state.name,
       age: this.state.age,
       height: this.state.height
    }
    axios.post("http://localhost:3333/smurfs", smurfObj)
    .then(response => {
          this.props.addSmurfForm(response.data)
    })
    .catch(err => console.log(err));
    console.log("working");
    this.setState({
       name: '',
       age: "",
       height: ""
    })
  }


   render() {
     
    return (
      <div className="SmurfForm">
        <form onSubmit={this.addSmurf}>
          
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
