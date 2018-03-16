import React, { Component } from 'react';
import axios from 'axios'
import Smurf from './Smurf';
import { error } from 'util';

class Smurfs extends Component {
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  constructor(){
    super();
    this.state= {
      smurfs:[],
      name:'',
      age:'',
      height:'',
      key:'',
    }
  };

  componentDidMount(){
    this.getSmurfs();
  }

  getSmurfs(){
    axios.get('http://localhost:3333/smurfs')
    .then (Response => {
      console.log(Response.data)
      this.setState(()=>({smurfs:Response.data}));
    })
    .catch(error =>{
      console.error('Server Error', error);
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