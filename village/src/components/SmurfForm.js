import React, { Component } from 'react';
import axios from "axios";

class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs : this.props.smurfs,
      name: '',
      age: '',
      height: ''
    };
  }
   
  addSmurf  =(ev) => {
    ev.preventDefault();
    // add code to create the smurf using the api
    axios.post("http://localhost:3333/smurfs",
    {
       name :this.state.name,
        age:this.state.age,
        height:this.state.height })
  .then(response => {

    this.setState({ smurfs: response.data })
    
  })
  .catch(err => {
    console.log("IN CATCH", err);
  });


      this.state.name=''
      this.state.age=''
      this.state.height=''
      window.location.reload();
  }
 
  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="SmurfForm">
          <form className="form-inline" onSubmit={this.addSmurf}>
  <div className="input-group mb-2 mr-sm-2">
    <div className="input-group-prepend">
      <div className="input-group-text">Name:</div>
    </div>
    <input type="text" className="form-control" id="inlineFormInputName2" placeholder="Name"
            onChange={this.handleInputChange}
            value={this.state.name}
            name="name"
          />
  </div>

   <div className="input-group mb-2 mr-sm-2">
    <div className="input-group-prepend">
      <div className="input-group-text">Age:</div>
    </div>
    <input type="text" className="form-control" id="inlineFormInputGroupUsername2" 
    onChange={this.handleInputChange}
    placeholder="age"
    value={this.state.age}
    name="age"
  />
  </div>
  <div className="input-group mb-2 mr-sm-2">
    <div className="input-group-prepend">
      <div className="input-group-text">Height:</div>
    </div>
    <input type="text" className="form-control" id="inlineFormInputGroupUsername2" 
    onChange={this.handleInputChange}
    placeholder="height"
    value={this.state.height}
    name="height"
  />
  </div>
  <button type="submit" className="btn btn-primary mb-2">Add to the village</button>
</form>
      </div>
    );
  }
}

export default SmurfForm;
