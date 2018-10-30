import React from "react";
import { Link } from 'react-router-dom';

const Smurf = props => {
  return (
    <div className="Smurf">
      <h3><Link to={`/smurf/${props.id}`}>{props.name}</Link></h3>
      <strong>{props.height} tall</strong>
      <p>{props.age} smurf years old</p>
      <button name={props.id} onClick={props.delete}>
        Kick Out of Village!
      </button>
      <button name={props.id} onClick={props.edit}>
        Edit Smurf
      </button>
    </div>
  );
};

Smurf.defaultProps = {
  name: "",
  height: "",
  age: ""
};

export default Smurf;
