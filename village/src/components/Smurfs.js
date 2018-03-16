import React, { Component } from 'react';
import axios from 'axios';
import Smurf from './Smurf';

class Smurfs extends Component {
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server

  constructor() {
    super();
    this.state = {
      smurfs: [],
      id: '',
      updateName: '',
    };
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleDelete = event => {
    axios.delete(`http://localhost:3333/smurfs/${event.target.value}`)
    .then(response => {
      this.setState({ smurfs: response.data });
    })
  }

  handleUpdate = event => {
    let update = {
      name: this.state.updateName,
    }
    for (let prop  in update) {
      if(update[prop] === '') {
        delete update[prop];
      }
    }
    axios.put(`http://localhost:3333/smurfs/${event.target.value}`, {...update})
    .then (response => {
      this.setState({ updateName: '', smurfs: response.data,})
    })
  }

  render() {
    return (
      <div className="Smurfs">
        <h1>Smurf Village</h1>
        <ul>
          {this.state.smurfs.map((smurf) => {
            return ( 
              <form  key={smurf.id} onSubmit = {this.handleChange}>
                <Smurf name={smurf.name} age={smurf.age} height={smurf.height} key={smurf.id} />
                <button type = "submit" value = {smurf.id} onClick = {this.handleDelete}>Delete</button>
                <button type = "submit" value = {smurf.id} onClick = {this.handleUpdate}>Update</button>
                <input name="updateName" type="text" value={this.props.updateName} onChange={this.props.handleChange} placeholder="Update Name" />
              </form>  
            );
          })}
        </ul>
      </div>
    );
  }
  componentDidMount()  {
    axios.get('http://localhost:3333/smurfs')
    .then(response => {
      this.setState({ smurfs: response.data });
    })
    .catch(error => {
      console.log(`there was an error getting smurfs ${error}`)
    });
  }
}

export default Smurfs;