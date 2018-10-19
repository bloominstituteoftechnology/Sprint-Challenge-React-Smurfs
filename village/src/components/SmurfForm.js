import React, { Component } from 'react';

class SmurfForm extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   id: this.props.id,
    //   name: this.props.name,
    //   age: this.props.age,
    //   height: this.props.height,
    // };
  }

  // saveSmurf = event => {
  //   event.preventDefault();
  //   // add code to create the smurf using the api
  //   if (this.state.name && this.state.age && this.state.height){
  //     const smurf = {
  //       id: this.state.id,
  //       name: this.state.name,
  //       age: this.state.age,
  //       height: this.state.height,
  //     }
  //     this.props.saveSmurf(smurf)
  //     this.setState({
  //       id: '',
  //       name: '',
  //       age: '',
  //       height: ''
  //     });
  //   }
  //
  // }

  handleSubmit = event => {
    event.preventDefault();
    if (this.props.isEditing) {
      this.props.editSmurf();
    } else {
      this.props.makeSmurf();
    }
    this.props.history.push('/village');
  }

  // handleInputChange = e => {
  //   this.setState({ [e.target.name]: e.target.value });
  // };

  render() {
    return (
      <div className="SmurfForm">
        <h2>{this.props.isEditing ? 'Edit Smurf' : 'Add a Smurf'}</h2>
        <form action=''>
          <input
            type='text'
            onChange={this.props.handleInputChange}
            placeholder="name"
            value={this.props.smurf.name}
            name="name"
          />
          <input
            onChange={this.props.handleInputChange}
            placeholder="age"
            value={this.props.smurf.age}
            name="age"
          />
          <input
            onChange={this.props.handleInputChange}
            placeholder="height"
            value={this.props.smurf.height}
            name="height"
          />
          <button type="submit" onClick={this.handleSubmit}>{this.props.isEditing ? 'Update Smurf' : 'Add to village'}</button>
        </form>
      </div>
    );
  }
}

export default SmurfForm;
