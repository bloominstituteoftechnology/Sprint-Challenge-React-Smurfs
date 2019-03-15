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

  componentDidMount() {
    console.log('CDM now running');
    axios
      .get ('http://localhost:3333/smurfs')
      .then(smurf => {
        console.log(smurf);
        this.setState({  
          name: '',
          age: '',
          height: '' 
        });
      })
      .catch(error => {
        console.log(error);
        this.setState({ error: error });
      });
  }

  addSmurf = event => {
    event.preventDefault();
    // add code to create the smurf using the api
    axios
      .post('http://localhost:3333/smurfs')
      .then(smurf => {
        console.log(smurf);
        this.props.addSmurfs(event, this.state.smurf);
        this.setState({
          smurf: {
            name: '',
            age: '',
            height: ''
          }
        });
      })
      .catch(error => {
        console.log(error);
        this.setState({ error: error });
      });
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
