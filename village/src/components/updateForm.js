import React, { Component } from 'react';
import axios from "axios";

class UpdateForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs : this.props.smurfs,
      name: '',
      age: '',
      height: ''
    };
  }
   
  updatehandler  =(ev) => {
    ev.preventDefault();
    const id=this.props.id
    console.log(id)
    // add code to create the smurf using the api
    axios.put(`http://localhost:3333/smurfs/${id}`,
    {
       name :this.state.name,
        age:this.state.age,
        height:this.state.height,
        id : id
     })
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
      <div className="SmurfForm update">
          <form className="form-inline" onSubmit={this.updatehandler}>
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
  <button type="submit" className="btn btn-primary mb-2">Update Smurf</button>
</form>
      </div>
    );
  }
}

export default UpdateForm;
