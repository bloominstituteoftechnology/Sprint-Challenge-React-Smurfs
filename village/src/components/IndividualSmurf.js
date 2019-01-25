import React, { Component } from 'react';
import axios from 'axios';

export default class IndividualSmurf extends Component {
  constructor(props) {
    console.log(props);
    super(props);
    this.state = {
      smurf: null,
      id: Number(props.match.params.id),
      smurfs: [] //props.smurfs
    };
  }

  componentDidMount() {
    this.fetchSmurfs();
  }

  fetchSmurf(){
    let id = this.state.id;
    let ourSmurf = {
      name: "not found",
      age: "n/a",
      height: "n/a"
    };
    this.state.smurfs.forEach(function(smurf){
      console.log(smurf.id + ' ?= ' + id);
      if(smurf.id === id){
        ourSmurf = smurf;
      }
    });
    this.setState(() => ({ smurf: ourSmurf }));
  }

  
  fetchSmurfs = () => {
    axios
      .get(`http://localhost:3333/smurfs/`)
      .then(response => {
        console.log(response.data);
        this.setState(() => ({ smurfs: response.data }));
        this.fetchSmurf();
      })
      .catch(error => {
        console.error(error);
      });
  };
   
 
  render() {
    if (!this.state.smurf) {
      return <div>Loading smurf information...</div>;
    }

    //const { name, age, height } = this.state.smurf;
    return (
      <div className="Smurf">
        <h3>{this.state.smurf.name}</h3>
        <strong>{this.state.smurf.height} tall</strong>
        <p>{this.state.smurf.age} smurf years old</p>
      </div>
    );
  }
}
