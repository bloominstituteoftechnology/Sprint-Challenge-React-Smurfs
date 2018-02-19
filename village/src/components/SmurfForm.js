import React, { Component } from 'react';
import Axios from 'axios';
class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      height: ''
    };
  }
  
  render() {
    return (
      <div className="SmurfForm">
        <form onSubmit={this.addSmurf.bind(this)}>
          <input
            onChange={this.handleInputChange}
            name="name"
            placeholder="name"
            value={this.state.name}
          />
          <input
            onChange={this.handleInputChange}
            name="age"
            placeholder="age"
            value={this.state.age}
          />
          <input
            onChange={this.handleInputChange}
            name="height"
            placeholder="height"
            value={this.state.height}
          />
          <button type="submit">Add to the village</button>
        </form>
      </div>
    );
  }
  
  addSmurf(event) {
    event.preventDefault();
    Axios.post('http://localhost:3333/smurfs', this.state)
      .then(response => {
        console.log('response from post', response);
        this.setState({
          name: '',
          age: '',
          height: ''
        });
        this.props.onCreate();
      })
      .catch(error => {
        console.log('error posting the data');
      });  
  };
  
  handleInputChange = event => {
    const { name, value} = event.target;
    this.setState({ [name]: value });
  }
}

export default SmurfForm;