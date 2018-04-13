import React from 'react';
import axios from 'axios';


const Smurf = props => {
  return (
    <div className="Smurf">
      <h3>{props.name}</h3>
      <strong>{props.height} tall</strong>
      <p>{props.age} smurf years old</p>
      {/* <button onClick={() =>
        props.deleteSmurf(props.id)}>Delete Smurf</button> */}
    </div>
  );
};

export default Smurf;
