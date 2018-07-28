import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Smurf from './Smurf';

class Smurfs extends Component {
    





  render() {
    return (
      
      <div className="Smurfs">
        <h1>Smurf Village</h1>
        
        
        <ul>
        
          {this.props.smurfs.map(smurf => {
            console.log(this.props.smurfs);
            return (
             <div>
              <Link to={`/smurfs/${smurf.id}`}>
              
              
              <Smurf
                name={smurf.name}
                id={smurf.id}
                age={smurf.age}
                height={smurf.height}
                key={smurf.id}
                handleDelete={this.props.handleDelete}
              />
              
              </Link>
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

export default Smurfs
