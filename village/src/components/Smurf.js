import React from 'react';


const Smurf = (props) => {
  return (
    <div className="smurf">
      <h3>{props.location.state.name}</h3>
      <strong>{props.location.state.height} tall</strong>
      <p>{props.location.state.age} years old</p>
      <p>id: {props.match.params.id}</p>
    </div>
  );
}

export default Smurf;