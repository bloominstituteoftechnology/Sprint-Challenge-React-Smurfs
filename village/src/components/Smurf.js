import React from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'
const Smurf = props => {
  console.log(props)
  return (
    <div className="Smurf">
      <h3>{props.name}</h3>
      <strong>{props.height} tall</strong>
      <p>{props.age} smurf years old</p>
      <button id={props.id} onClick={props.onDelete}>Delete</button>
      <Link to={`/smurfs/${props.id}`}><button>Update</button></Link>
      <Link to={`/single/${props.id}`}><button>More Info</button></Link>
    </div>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;

