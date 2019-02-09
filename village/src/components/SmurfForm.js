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
  }

  addSmurf = event => {
    event.preventDefault();
    // add code to create the smurf using the api
    const smurf = {name: this.state.name, age: this.state.age, height: this.state.height, id: this.props.smurf.id}

    console.log(this.props)
    if (this.props.isUpdating) {
      console.log('Updating Success');
      this.props.handleUpdateSmurf(smurf)
    } else {
      console.log("Updating Fail")
      this.props.handleAddNewSmurf(event);
    }

    this.setState({
      name: '',
      age: '',
      height: ''
    });
  }

  handleInputChange = e => {
    this.setState({ 
        [e.target.name]: e.target.value 
    });
  };

  render() {
    return (
      <div className="SmurfForm">
        <form>
          <h3>{this.props.isUpdating ? "Update Existing Smurf" : "Add New Smurf"}</h3>
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
          <button onClick={this.addSmurf}>Add to the village</button>
        </form>
      </div>
    );
  }
}

export default SmurfForm;
