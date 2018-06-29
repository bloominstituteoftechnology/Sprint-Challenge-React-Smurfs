import React, { Component } from 'react';
import axios from 'axios';

class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      height: '',
      nameEdit: '',
      ageEdit: '',
      heightEdit: '',
      idEdit: '',
      URL: "http://localhost:3333/smurfs",
      getData: props.getData,
    };
  }

  addSmurf = event => {
    event.preventDefault();
    // add code to create the smurf using the api
    const newSmurf = {name: this.state.name, 
                      age: this.state.age, 
                      height: this.state.height}
    axios
        .post(this.state.URL, newSmurf)
        .then(response => {
          console.log(response);
          this.state.getData();
        })
        .catch(err => {
          console.log(err);
        })

    this.setState({
      name: '',
      age: '',
      height: ''
    });
  }

  editSmurf = event => {
    event.preventDefault();
    const newSmurf = {name: this.state.nameEdit,
                      age: this.state.ageEdit,
                      height: this.state.heightEdit
                    }
    axios
        .put(this.state.URL + `/${this.state.idEdit}`, newSmurf)
        .then(response => {
          console.log(response);
          this.state.getData();
        })
        .catch(err => {
          console.log(err);
        })

    this.setState({
      idEdit: '',
      nameEdit: '',
      ageEdit: '',
      heightEdit: ''
    });
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="SmurfForm">
      <h4>Add Smurf</h4>
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
          <button type="submit">Add to the village</button>
        </form>


        <h4>Update Smurf by ID</h4>
        <form onSubmit={this.editSmurf}>
        <input
            onChange={this.handleInputChange}
            placeholder="Please enter smurf ID"
            value={this.state.idEdit}
            name="idEdit"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="Name"
            value={this.state.nameEdit}
            name="nameEdit"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="Age"
            value={this.state.ageEdit}
            name="ageEdit"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="Height"
            value={this.state.heightEdit}
            name="heightEdit"
          />
          <button type="submit">Edit Smurf</button>
        </form>
      </div>
    );
  }
}

export default SmurfForm;
