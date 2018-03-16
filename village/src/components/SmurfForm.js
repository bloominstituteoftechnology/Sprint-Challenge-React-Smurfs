import React, { Component } from 'react';
import axios from 'axios';

class SmurfForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
      name: '',
      age: '',
      height: '',
      id: '',
    };

    console.log(`constructing ... in SmurfForm`)
    this.addSmurf = this.addSmurf.bind(this);
    this.updateName = this.updateName.bind(this);
    this.updateAge = this.updateAge.bind(this);
    this.updateHeight = this.updateHeight.bind(this);
  }

  // componentDidMount() {
  //   console.log(`didMounting in SmurfForms ...`)
  //   axios
  //   .get('http://localhost:3333/smurfs')
  //   .then( res => {
  //     console.log(`res.data: ${res.data}`);
  //     this.setState({ smurfs: res.data });
  //     console.log(`smurfs: ${this.state.smurfs}`);
  //   })
  //   .catch( error => console.error(error))
  // }

  addSmurf(event) {
    // event.preventDefault();
    // add code to create the smurf using the api
    const smurf = {};
    smurf.name = this.state.name;
    smurf.age = this.state.age;
    smurf.height = this.state.height;
    console.log('adding a smurf')

    axios.post('http://localhost:3333/smurfs', smurf)
    .then(res => {
      console.log(`res.data: ${res.data}`);
      this.setState({ smurfs: res.data });
      this.setState({
        name: '',
        age: '',
        height: ''
      });
      console.log(`smurfs: ${this.state.smurfs}`);
    })
    // this.setState({
    //   name: '',
    //   age: '',
    //   height: ''
    // });
    .catch(error => console.error(error))
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
        <form onSubmit={this.addSmurf}>
          <input
            required
            onChange={this.updateName}
            placeholder="name"
            value={this.state.name}
          />
          <input
            required
            onChange={this.updateAge}
            placeholder="age"
            value={this.state.age}
          />
          <input
            required
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