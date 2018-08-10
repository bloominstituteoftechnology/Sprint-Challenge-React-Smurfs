import React from 'react';

const Smurf = props => {
  console.log(props.props)
  return (
    <div className="Smurf">
      <h3>{props.props.name}</h3>
      <strong>{props.props.height} tall</strong>
      <p>{props.props.age} smurf years old</p>
    </div>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;
