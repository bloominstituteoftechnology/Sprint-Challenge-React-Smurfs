import React, { Component } from 'react';
import axios from 'axios';
import Smurf from './Smurf';




  /*  state = {
     smurfs: [0],
   }
   componentDidMount() {
     axios.get('http://localhost:3333')
       .then(response => {
         console.log(response);
         this.setState(() => { smurfs: response });
       })
       .catch(error => {
         console.error(error);
       });
     console.log();
   } */

  const Smurfs = props => {
    return (
      <div className="Smurfs">
        <h1>Smurf Village</h1>
        <ul>
          {props.smurfs.map(smurf => {
            return (
            <Smurf name={smurf.name} age={smurf.age} height={smurf.height} key={smurf.id} />
            );
          })}
        </ul>
      </div>
    );
};

export default Smurfs;