import React from 'react';

const Smurf = props => {
  console.log(props)
  return (
    <div className="Smurf">
      {}
    </div>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;

