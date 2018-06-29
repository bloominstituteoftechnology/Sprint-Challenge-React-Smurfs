import React from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';

const Smurf = ({ name, height, age, id }) => {
  return (
    <div className="Smurf">
      <h3>{name}</h3>
      <strong>{height} tall</strong>
      <p>{age} smurf years old</p>
      <Link 
        to={`/edit/${id}`} 
        style={{textDecoration: 'none'}}
      >
        <Button>edit</Button>
      </Link>
    </div>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;

