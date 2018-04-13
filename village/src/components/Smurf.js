import React from 'react';

const Smurf = props => {
  console.log(props.id) //check what's on props
  return (
    <div className="Smurf">
      <h3>{props.name}</h3>
      <strong>{props.height}cm tall</strong>
      <p>{props.age} smurf years old</p>
      <button onClick={props.deleteSmurf(props.id)}>Delete this Smurf</button>
    </div>
  );
};

export default Smurf;
