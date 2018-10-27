import React, { Component } from 'react';



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
  
    this.props.handleAddNewSmurf(event);
    console.log(this.props)
    console.log('success')

    // this.setState({
    //   name: '',
    //   age: '',
    //   height: ''
    // });
  }

  // handleInputChange = e => {
  //   this.setState({ 
  //     smurf: {
  //       ...this.state.smurf,
  //       [e.target.name]: e.target.value 
  //     }
  //   });
  // };

  render() {
    return (
      <div className="SmurfForm">
        <form onSubmit={this.addSmurf}>
          <input
            onChange={this.props.handleInputChange}
            placeholder="name"
            value={this.state.name}
            name="name"
          />
          <input
            onChange={this.props.handleInputChange}
            placeholder="age"
            value={this.state.age}
            name="age"
          />
          <input
            onChange={this.props.handleInputChange}
            placeholder="height"
            value={this.state.height}
            name="height"
          />
          <button type="submit">Add to the village</button>
        </form>
      </div>
    );
  }
}

export default SmurfForm;
