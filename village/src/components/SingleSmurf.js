import React from "react";
import { Link } from "react-router-dom";

const SingleSmurf = props => {
  return (
    <div className="Singlesmurf">
      <h3 className="Smurf">{props.location.state.name}</h3>
      <strong className="Smurf">{props.location.state.height} tall</strong>
      <p className="Smurf">{props.location.state.age} smurf years old</p>
      <Link to="/">
        <button> Back to Village</button>
      </Link>
    </div>
  );
};

export default SingleSmurf;
