import React from 'react';
import { Link } from 'react-router-dom';

const Smurf = props => {
  return (
    <div className="Smurf">
      <h3>{props.name}</h3>
      <strong>{props.height} tall</strong>
      <p>{props.age} smurf years old</p>
      <Link to={`/view/${props.id}`} ><button>View</button></Link>
      <Link to="/smurfs" ><button onClick={() => props.handleSmurfDelete(props.id)} >Delete</button></Link>
      <Link to={`/update/${props.id}`} ><button>Modify</button></Link>
    </div>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;
