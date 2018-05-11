import React from 'react';
import { Link } from 'react-router-dom';

const Smurf = props => {
  return (
    <div className="Smurf">
    <div>
          <Link to="/">Header</Link>
        </div>
        <div>
          <Link to="/Smurf">Smurf</Link>
        </div>
        <div>
          <Link to="/SmurfForm">SmurfForm</Link>
      </div> 
       <div>
          <Link to="/Smurfs">Smurfs</Link>
        </div> 
      <h3>{props.name}</h3>
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

