import React, { Component } from 'react';
import './Smurfs.css';
import axios from 'axios';

import Smurf from './Smurf';

class Smurfs extends Component {
  constructor() {
    super();
    this.state = {
      smurfs: []
    }
  }

  loadSmurfs() {
    var smurfURL = 'http://localhost:3333/smurfs';
    axios.get(smurfURL).then((response)=>{
      console.log(response) 
      this.setState({smurfs: response.data}); 
    })
    .catch((error)=>{
        console.log(error);
    });
  }

  componentDidMount() {
    this.loadSmurfs()
  }

  render() {
    return (
      <div className="Smurfs">
        <h1>Smurf Village</h1>
        <div>
          <ul className="smurf__list">
            { this.state.smurfs.map((smurf) => {
              return <Smurf name={smurf.name} age={smurf.age} height={smurf.height} key={smurf.id} />;
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default Smurfs;