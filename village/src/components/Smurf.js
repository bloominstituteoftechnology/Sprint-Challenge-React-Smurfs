// React
import React from 'react';
import { Link } from 'react-router-dom';

// Styles
import './Smurf.css';

const Smurf = props => {
  return (
    <div className="Smurf">
      <h3>{props.name}</h3>
      <strong>{props.height} tall</strong>
      <p>{props.age} smurf years old</p>
      <Link to={`/editsmurf/${props.id}`}><button className='edit-btn'>Edit {props.name}</button></Link>
      <button className='delete-btn' onClick={props.deleteSmurf(props.id)}>Delete {props.name}</button>
    </div>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;
