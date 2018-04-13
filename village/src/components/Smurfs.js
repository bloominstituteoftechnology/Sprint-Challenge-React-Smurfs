import React, { Component } from 'react';
import{Link} from 'react-router-dom'
import Smurf from './Smurf';

const Smurfs = props => {
    console.log("i ran")
    console.log(props);
    return (
      <div className="Smurfs">
       <div> <h1 className="smurfsh1-style">Smurf Village</h1></div>
        <ul>
          {props.smurfs.map(smurf => {
            return (
            
              <div>
              
              <Smurf
                name={smurf.name}
                id={smurf.id}
                age={smurf.age}
                height={smurf.height}
                key={smurf.id}
                deleteSmurf={props.deleteSmurf}
                updateGet={props.updateGet}
                smurfs={props.smurfs}
                handleTextInput={props.handleTextInput}

              />

              </div>
            );
          })}
        </ul>
      </div>
    );
}

export default Smurfs;
