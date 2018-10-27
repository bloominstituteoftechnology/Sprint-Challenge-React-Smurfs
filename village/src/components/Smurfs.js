import React, { Component } from 'react';
import {Link, Redirect} from 'react-router-dom';
import axios from 'axios';

import Smurf from './Smurf';
import './smurf.css';

class Smurfs extends Component {
  
  delete = (id) => {
    axios.delete(`http://localhost:3333/smurfs/${id}`)
    .then (res => {
      this.props.updateSmurfData(res.data);
      this.props.history.goBack();
    })
    .catch(err => console.log(err))
  }

  render() {
    
    const selectedSmurf = this.props.smurfs.find(smurf => {if (smurf.id.toString() === this.props.match.params.id) return smurf})
    
    if (selectedSmurf !== undefined) {
      return (
        <div className='Smurfs'>
          <div className='smurf-card'>
            <div className='smurf-card-links'>
              <Link to='/'>Back to the Smurf list</Link>
                <div className='delete-smurf-button' onClick={()=> this.delete(selectedSmurf.id)}>X</div>
            </div>
            <div className='smurf-card-data'>
              <Smurf
                name={selectedSmurf.name}
                id={selectedSmurf.id}
                age={selectedSmurf.age}
                height={selectedSmurf.height}
              />
            </div>
          </div>
          
        </div>
      )
    }
    return (
      <div className="Smurfs">
        <h1>Smurf Village</h1>
        <ul>
          {this.props.smurfs.map(smurf => {
            return (
              <Link to={`/smurf/${smurf.id}`}>
                <Smurf
                  name={smurf.name}
                  id={smurf.id}
                  age={smurf.age}
                  height={smurf.height}
                  key={smurf.id}
                />
              </Link>
            );
          })}
        </ul>
      </div>
    );
  }
}

Smurf.defaultProps = {
  smurfs: [],
};

export default Smurfs;
