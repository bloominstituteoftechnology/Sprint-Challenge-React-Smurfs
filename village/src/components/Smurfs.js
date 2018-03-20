import React, { Component } from 'react';
import axios from 'axios';
import Smurf from './Smurf';
// import SmurfForm from './SmurfForm';

class Smurfs extends Component {
  state = {
    smurfs: []
  }
  // constructor() {
  //   super();
  //   this.state = {
  //     smurfs: [],
  //     name: '',
  //     age: '',
  //     height: ''
  //   }


getSmurfs = this.getSmurfs.bind(this);

  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
componentDidMount() {
  this.getSmurfs();
//   axios.get('http://localhost:3333/smurfs')
//   .then(response => {
//   this.setState({ smurfs: response.data });
// })
// .catch(error => {
//   console.log( `There was an error getting smurfs: ${error}`);
// });
}

getSmurfs() {
  axios.get('http://localhost:3333/smurfs')
   .then(response => response.data)
   .then(smurfs => {
     this.setState({
       smurfs
     });
   })
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
