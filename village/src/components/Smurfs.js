import React, { Component } from 'react';
import Smurf from './Smurf';
import axios from 'axios';

class Smurfs extends Component {
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
constructor(){
  super();
  this.state ={
    smurfs:[],
  };
}
componentDidMount() {
  axios.get('https://www.smurf.com/en//smurfs').then(data=>
   this.setState({smurfs: data.results}));
  // fetch('/smurfs')
  //   .then(res => {
  //    return res.json();
  //  })
  //   .then(data => {
  //    this.setState({ smurfs: data.results})

  //   })
  //   .catch(err => {
  //     throw new Error(err);
  //   });
  }

  render() {
    return (
      <div className="Smurfs">
        <h1>Smurf Village</h1>
        <ul>
          
          { this.state.smurfs.map((smurf) => {
            return <Smurf name={smurf.name} age={smurf.age} height={smurf.height} key={smurf.id} />;
          })}
        </ul>
      </div>
    );
  }
}


export default Smurfs;