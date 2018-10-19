import React from 'react';
import { EventEmitter } from '../events';

const Smurf = props => {
  return (
    <div className="Smurf">
      <h3>{props.name}</h3>
      <strong>{props.height} tall</strong>
      <p>{props.age} smurf years old</p>
      <div className='smurf-btns'>
        <div className='smurf-btn' id={props.id}>Edit</div>
        <div className='smurf-btn' onClick={(id) => EventEmitter.dispatch('deleteSmurf', props.id)}>Delete</div>
      </div>
    </div>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;

