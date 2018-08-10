import React, { Component } from 'react';
import axios from 'axios';

import SmurfForm from './SmurfForm';
import Smurfs from './Smurfs';

 class Village extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
      age: "",
      height: ""
    };
  }
   componentDidMount() {
    axios
      .get('http://localhost:3333/smurfs')
      .then(response => {
        this.setState(() => ({
          smurfs: response.data
        }));
      })
      .catch(error => {
        console.error('Server Error', error);
      });
  }

  deleteSmurf =(id) => {
    axios
    .delete(`http://localhost:3333/smurfs/${id}`)
    .then(response => {
      this.setState(() => ({
        smurfs: response.data
      }));
    })
    .catch(error => {
      console.log(error);
    });
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  editSmurf =(id) => {
    console.log(id);
    axios.put(`http://localhost:3333/smurfs/${id}`, {
      age: this.state.age,
      height: this.state.height
  })
  .then(response => {
    this.setState(() => ({
      smurfs: response.data
    }));
  })
    .catch(error => {
      console.log(error);
    });
  }

  render() {
    return (
      <div className="App">
        <SmurfForm smurfs={this.state.smurfs} />
        <Smurfs
        smurfs={this.state.smurfs}
        remove={this.deleteSmurf}
        edit={this.editSmurf}
        handleInputChange={this.handleInputChange}
        />
      </div>
    );
  }
}
 export default Village;