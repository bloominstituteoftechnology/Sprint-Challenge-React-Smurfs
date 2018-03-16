import React, { Component } from 'react';
import axios from 'axios';

import Smurfs from './Smurfs';

class SmurfForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
      name: '',
      age: '',
      height: '',
      id: ''
    };
    this.addSmurf = this.addSmurf.bind(this);
    this.updateName = this.updateName.bind(this);
    this.updateAge = this.updateAge.bind(this);
    this.updateHeight = this.updateHeight.bind(this);
    this.getSmurfs = this.getSmurfs.bind(this);
    this.deleteSmurf = this.deleteSmurf.bind(this);
    this.updateSmurf = this.updateSmurf.bind(this);
  }

  updateSmurf(event) {
    const update = this.state.smurfs.filter(smurf => smurf.id === event.target.id)
    //console.log(event.target)
    this.setState({
      name: update.name,
      age: update.age,
      height: update.height,
      id: update.id
    })

  }

  getSmurfs() {
    axios.get("http://localhost:3333/smurfs")
      .then(response => {
        this.setState({ smurfs: response.data })
      })
      .catch(err => {
        console.log(err)
      })
  }
  componentDidMount() {
    this.getSmurfs()
  }

  addSmurf(event) {
    event.preventDefault();
    // add code to create the smurf using the api
    if (this.state.id === '') {
      const newSmurf = {
        name: this.state.name,
        age: this.state.age,
        height: `${this.state.height} cm`
      }
      axios.post("http://localhost:3333/smurfs", newSmurf)
        .then(response => {
          console.log('Request to add was successful!', response)
          this.setState({
            smurfs: response.data,
            name: '',
            age: '',
            height: ''
          });
          
        })
        .catch(err => {
          console.log(`The request to add failed: ${err}`)
        })
    } else {
      const updateSmurf = {
        name: this.state.name,
        age: this.state.age,
        height: `${this.state.height} cm`,
        id: this.state.id
      }
      axios.put(`http://localhost:3333/smurfs/${updateSmurf.id}`, updateSmurf)
        .then(response => {
          console.log('Request to add was successful!', response)
          this.setState({
            smurfs: response.data,
            name: '',
            age: '',
            height: '',
            id: ''
          });
          
        })
        .catch(err => {
          console.log(`The request to add failed: ${err}`)
        })
    }
    
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

  deleteSmurf(event) {
    //console.log(event.target.id)
    axios.delete(`http://localhost:3333/smurfs/${event.target.id}`)
      .then(response => {
        this.getSmurfs()
        alert(`${response.data.SmurfRemoved.name} exiled successfully!`)
      })
      .catch(err => {
        console.log(`Error exiling smurf: ${err}`)
      })
      
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
            type="number"
            onChange={this.updateAge}
            placeholder="age"
            value={this.state.age}
          />
          <input
            onChange={this.updateHeight}
            placeholder="height in cm"
            value={this.state.height}
          />
          <button type="submit">Add to the village</button>
        </form>
        <Smurfs smurfs={this.state.smurfs} delete={this.deleteSmurf} update={this.updateSmurf}/>
      </div>
    );
  }
}

export default SmurfForm;