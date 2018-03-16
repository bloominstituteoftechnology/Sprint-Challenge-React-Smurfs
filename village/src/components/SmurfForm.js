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
    this.addSmurf = this.addSmurf.bind(this);
    this.updateName = this.updateName.bind(this);
    this.updateAge = this.updateAge.bind(this);
    this.updateHeight = this.updateHeight.bind(this);
  }

  componentDidMount() {
    this.addSmurf();
  }
    addSmurf(event) {
      // event.preventDefault();
      if (this.state.name === undefined || this.state.name.length === 0) return;
      axios.post('http://localhost:3333/smurfs', this.state)
        .then(response => {
          this.setState({ 
            name: '',
            age: '',
            height: ''
          })
        })
        .catch((error) => {
          console.error('Server Error', error)
        });
      }
  

  updateName(event) {
    // console.log(event.target.value);
    this.setState({
      name: event.target.value
    });
  }

  updateAge(event) {
    // console.log(event.target.value)
    this.setState({
      age: event.target.value
    });
  }

  updateHeight(event) {
    // console.log(event.target.value)
    this.setState({
      height: event.target.value
    });
  }

  render() {
    return (
      <div className="SmurfForm">
        <form onSubmit={this.addSmurf}>
          <input
            onChange={this.updateName}
            placeholder="name"
            value={this.state.name}
           
          />
          <input
            onChange={this.updateAge}
            placeholder="age"
            value={this.state.age}
          />
          <input
            onChange={this.updateHeight}
            placeholder="height"
            value={this.state.height}
          />
          <button type="submit">Add to the village</button>
        </form>
      </div>
    );
  }
}

export default SmurfForm;