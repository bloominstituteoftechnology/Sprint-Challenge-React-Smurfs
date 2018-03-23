import React, { Component } from 'react';
import  axios  from 'axios';
import Smurf from './Smurf';
import { Link } from 'react-router-dom';


class Smurfs extends Component {
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server

  state = {
    smurfs: []
  }

  componentDidMount() {
  axios
    .get('http://localhost:3333/smurfs')
    .then (response => {
    this.setState(() => ({ smurfs: response.data }))
  })
  .catch(error => {
    console.error(`Server Error: ${error}`)
  });
}

  render() {
    return (
      <div className="Smurfs">
        <ul>
          { this.state.smurfs.map((smurf) => {
            return <Smurf name={smurf.name} age={smurf.age} height={smurf.height} key={smurf.id} />;
         })}
       </ul> 
     <button> <Link to="/addSmurf"> Add New Smurf </Link> </button>
      </div>
    );
  }
}

export default Smurfs;