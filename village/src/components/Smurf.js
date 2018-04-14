import React, { Component } from 'react';
import axios from 'axios';

class Smurf extends Component {
  constructor(props){
    super(props);
    this.state = {
        name :  this.props.name,
        id: this.props.id,
        age: this.props.age,
        height: this.props.height
    }
  }

  deleteSmurf = event =>{
    console.log('DELSmurf', this.props.id)
    console.log('Props', this.props)
    event.preventDefault();
    axios.delete(`http://localhost:3333/smurfs/${this.props.id}`)
      .then(response => {
        this.props.updateSmurfs(response.data);
        console.log('response', response.data)
      })
      .catch(error => console.log(error));
  }
  // deleteFunction = (i) => {
  //   console.log(i);
  //   const smurfs = this.props.smurfs;
  //   smurfs.splice(i, 1);
  //   this.props.updateSmurfs();
  // }


  render(){
    return (
      <div className="Smurf">
        <h3>{this.props.name}</h3>
        <strong>{this.props.height} short</strong>
        <p>{this.props.age} smurf years old</p>
          <button onClick={this.deleteSmurf}>Delete</button>
          <button onClick={this.updateSmurf}>Update</button>
      </div>
    );
  }

};

export default Smurf;
