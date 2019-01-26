import React from 'react';
import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Smurf = props => {
  return (
    <div >
      <h3><span className="smurf-heading">{props.name}</span> <span className="awesome-edit"><FontAwesomeIcon icon="edit" /></span></h3>
      <strong>{props.height} tall</strong>
      <p>{props.age} smurf years old</p>
      <button className="btn-delete" onClick={() => props.deleteSmurf(props.id)}>Bye bye Smurf!</button>
       
    </div>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;

