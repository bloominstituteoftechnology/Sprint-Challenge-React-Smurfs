import React from 'react';

const Smurf = props => {
  return (
    <div>
      <div className="Smurf">
        {
          `${props.id} -- ${props.name} ${props.height} ${props.age} `
        }
      </div>
      <button onClick={event => props.handleDeleteSmurf(event, props.id)}>Delete</button>
    </div>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;

