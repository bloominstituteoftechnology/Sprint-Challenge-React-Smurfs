import React, { Component } from 'react';
import Smurfs from './Smurfs';
import axios from 'axios';


class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      height: '',
      
      // add: () => {
      //   props.getSmurfs();
      // }
      
    };
     
  }

  

  addSmurf = event => {
    event.preventDefault();
    // add code to create the smurf using the api
    
    axios.post('http://localhost:3333/smurfs', this.state )
    
    .then(saveSmurf => {
        //props.getSmurfs();
        console.log(this.props)
        this.props.addSmurfsOnCreate(saveSmurf.data);
        this.setState({
          name: '',
          age: '',
          height: ''
        });
        // this.state.add;
        console.log(saveSmurf);
      
    })
    .catch(err => {
      console.log(err);
    })
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="SmurfForm">
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
      </div>
    );
  }
}

export default SmurfForm;
