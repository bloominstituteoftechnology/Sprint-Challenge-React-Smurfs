import React, { Component } from 'react';
import axios from 'axios';

class SmurfForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      height: '',
    };
    this.addSmurf = this.addSmurf.bind(this);
    this.updateSmurf = this.updateSmurf.bind(this);
    this.updateName = this.updateName.bind(this);
    this.updateAge = this.updateAge.bind(this);
    this.updateHeight = this.updateHeight.bind(this);
  }

  addSmurf(event) {
    event.preventDefault();
    const newSmurf = this.state;
    axios.post(`http://localhost:3333/smurfs`, newSmurf)
      .then(response => {
        this.props.updateSmurfs();
        console.log(response)
      })
      .catch(error => console.log(`Duplicate Smurf! Use Update ${error}`))
    
    this.setState({
      name: '',
      age: '',
      height: ''
    });
  }

  updateSmurf(event) {
    event.preventDefault();
    const newSmurf = this.state;
    console.log(newSmurf);
    axios.put('http://localhost:3333/smurfs', newSmurf)
      .then(response => {
        this.props.updateSmurfs();
      })
      .catch(error => console.log(error.response))
    
    this.setState({
      name: '',
      age: '',
      height: ''
    });
  }

  updateName(event) {
    this.setState({
      name: event.target.value
    });
  }

  updateAge(event) {
    this.setState({
      age: event.target.value
    });
  }

  updateHeight(event) {
    this.setState({
      height: event.target.value
    });
  }

  render() {
    return (
      <div className="SmurfForm">
        <form>
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
          <button onClick={this.addSmurf} type="submit">Add to the village</button>
          <button onClick={this.updateSmurf} type="submit">Update the village</button>
        </form>
      </div>
    );
  }
}

export default SmurfForm;