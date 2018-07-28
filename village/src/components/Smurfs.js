import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import Smurf from './Smurf';

class Smurfs extends Component {

  deleteSmurf = id =>{
    // console.log('id deleted: ', id);
    axios 
    .delete(`http://localhost:3333/smurfs/${id}`)
    .then(res => this.props.handleSetData(res.data))
  }

  updateSmurf = id =>{
    console.log('id updated: ', id)
    //const updatedObj = {

    // }
    // axios 
    // .put(`http://localhost:3333/smurfs/${id}`)
    // .then(res => this.props.handleSetData(res.data))
  }

  render() {
    return (
      <div className="Smurfs">
        <h1>Smurf Village</h1>
        <Link to='/addSmurf'><button>Add a New Smurf</button></Link>
        <ul>
          {this.props.smurfs.map(smurf => {
            return (
              <div key={smurf.id} className='cardWrapper'>
                <Smurf
                  name={smurf.name}
                  id={smurf.id}
                  age={smurf.age}
                  height={smurf.height}
                  
                />
                <button onClick={()=> this.deleteSmurf(smurf.id)} >Delete {smurf.name}</button>
                <button onClick={()=> this.updateSmurf(smurf.id)} >Update {smurf.name}</button>
              </div>
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
