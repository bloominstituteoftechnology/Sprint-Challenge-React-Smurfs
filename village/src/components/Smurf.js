import React from 'react';
import DeleteSmurf from './DeleteSmurf';

const Smurf = ({ smurf }) => {
  return (
    <div className="Smurf">
      <h3>{smurf.name}</h3>
      <strong>{smurf.height} tall</strong>
      <p>{smurf.age} smurf years old</p>
      <DeleteSmurf id={smurf.id} />
    </div>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;
