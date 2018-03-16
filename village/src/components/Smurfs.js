import React, { Component } from 'react';
import axios from 'axios';

import Smurf from './Smurf';

class Smurfs extends Component {
  constructor(props){
    super(props);
    this.state = {smurfs:[]};
  }

  componentDidMount(){
   axios.get('http://localhost:3333/smurfs').then( (res)=>{
      res.data.forEach( (e) =>{
        let smurfs = this.state.smurfs.slice();
        smurfs.push(e);
        this.setState({smurfs:smurfs});
      });
    }).catch( (err) =>{
      console.log(err);
    });
    console.log(this.state);
  }
  


  
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server

  render() {
    return (
      <div className="Smurfs">
        <h1>Smurf Village</h1>
        <ul>
          { this.state.smurfs.map((smurf, i) => {
            console.log(smurf);
            return <Smurf key={i} name={smurf.name} age={smurf.age} height={smurf.height}  />;
          })}
        </ul>
      </div>
    );
  }
}

export default Smurfs;
