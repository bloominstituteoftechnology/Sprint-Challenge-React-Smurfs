import React from "react";
import { Link } from "react-router-dom";

const Smurf = props => {
  const { id, name, height, age } = props;

  return (
    <div className="smurf-container">
      <div className="Smurf">
        <Link to={`/smurfs/${id}`}>
          <h3>{name}</h3>
        </Link>

        <strong>{height} tall</strong>
        <p>{age} smurf years old</p>
        <button onClick={event => props.deleteSmurf(event, id)}>
          Delete Smurf
        </button>
      </div>
    </div>
  );
};

Smurf.defaultProps = {
  name: "",
  height: "",
  age: ""
};

export default Smurf;
