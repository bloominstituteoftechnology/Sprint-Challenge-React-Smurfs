import React from 'react';

const Smurf = props => {
  return (
    <div className="Smurf">
      {props.name}{props.height}{props.age}
    </div>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;

