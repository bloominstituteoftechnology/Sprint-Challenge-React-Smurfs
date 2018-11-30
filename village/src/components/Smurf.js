import React from 'react';

const Smurf = ({name, height, age, id, deleteFunc}) => {
  return (
    <div className="Smurf">
      <h3>{name}</h3>
      <strong>{height} tall</strong>
      <p>{age} smurf years old</p>
      <span
        className='delete-btn'
        onClick={() => deleteFunc(id)}>X</span>
    </div>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;
