import React from 'react';

import './smurfs.css';

const Smurf = (props) => {
  return (
    <div className="Smurf">
      <h3>{props.name}</h3>
      <strong>{props.height} tall</strong>
      <p>{props.age} old</p>
      <p onClick={() => props.delete(props.id)}
        style={{cursor: 'pointer', display: 'inline',
        float: 'left', border: 'solid 1px black'}}
      >x</p>
    </div>
  );
}

export default Smurf;