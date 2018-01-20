import React from 'react';

const Smurf = (props) => {
  return (
    <div className="Smurf">
    <hr />
    <h3>{props.name}</h3>
      <strong>{props.height} cm tall</strong>
      <p>{props.age} yrs old</p>
    </div>
  );
}

export default Smurf;