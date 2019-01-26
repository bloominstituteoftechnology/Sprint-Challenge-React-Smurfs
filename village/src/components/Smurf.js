import React from 'react';

const Smurf = props => {
  console.log(props)
  return (
    <div className="Smurf">
      <p  onClick={()=>{
        props.deleteASmurf(props.id)
      }}>X</p>
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

