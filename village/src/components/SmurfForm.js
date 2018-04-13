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
    // alert(event);
    // event.preventDefault();
    // add code to create the smurf using the api
    const newSmurf = {
      name: this.state.name,
      age: this.state.age,
      height: this.state.height 
    }

    axios
    .post('http://localhost:3333/smurfs', newSmurf)
    .then(response => {
      console.log(response);
      console.log(response.data);
      this.props.getSmurfs();
    })
    .catch(err => {
      console.log('This Aint No Good :(', err);
    });

    this.setState({
      name: '',
      age: '',
      height: ''
    });
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return(
      <div>
        {this.props.smurfs.map((smurf, index) => {
      return (
        <div key={smurf.id} className="SmurfForm">
          <form onSubmit={this.addSmurf}>
            <input
              onChange={this.handleInputChange}
              type="text"
              placeholder="name"
              value={this.state.name}
              name="name"
            />
            <input
              onChange={this.handleInputChange}
              type="number"
              placeholder="age"
              value={this.state.age}
              name="age"
            />
            <input
              onChange={this.handleInputChange}
              type="number"
              placeholder="height"
              value={this.state.height}
              name="height"
            />
            <button type="submit">Add to the village</button>
          </form>
        </div>
    );
  })}
</div>
    )

  }
}

export default SmurfForm;
