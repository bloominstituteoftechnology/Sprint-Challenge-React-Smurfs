import React, { Component } from 'react';
import axios from 'axios';

import SmurfForm from './SmurfForm';
import Smurfs from './Smurfs';

 class Village extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
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
  
  render() {
    return (
      <div className="App">
        <SmurfForm smurfs={this.state.smurfs} />
        <Smurfs smurfs={this.state.smurfs} remove={this.deleteSmurf} />
      </div>
    );
  }
}
 export default Village;