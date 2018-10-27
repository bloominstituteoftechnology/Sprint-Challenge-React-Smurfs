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
    axios
	.post(this.props.URL, {
  	   id : 2,
   	   name: this.state.name,
  	   age: this.state.age,
  	   height: this.state.height
	})
	.then(res => {
		this.props.updateSmurfs(res.data);
		this.setState({name : '',age : '',height : ''});
	})
	.catch(err => console.log(err));
  };

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="SmurfForm">
        <form onSubmit={this.addSmurf}>
          <input
	    type = "text"
            onChange={this.handleInputChange}
            placeholder="name"
            value={this.state.name}
            name="name"
	    required
          />
          <input
	    type = "text"
            onChange={this.handleInputChange}
            placeholder="age"
            value={this.state.age}
            name="age"
	    required
          />
          <input
	    type = "text"
            onChange={this.handleInputChange}
            placeholder="height"
            value={this.state.height}
            name="height"
	    required
          />
          <button type="submit">Add to the village</button>
        </form>
      </div>
    );
  }
}

export default SmurfForm;
