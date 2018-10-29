import React from 'react';
import {link} from 'react-router-dom';
import smurfs from './Smurfs';


const Smurf = props => {
  return (
    <div className="Smurf">
      {props.smurfs.map(smurf =>{
       return  <Smurf key ={ smurf.id} smurf={smurf} />
      })}
      <strong>{props.height} tall</strong>
      <p>{props.age} smurf years old</p>
    </div>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;

