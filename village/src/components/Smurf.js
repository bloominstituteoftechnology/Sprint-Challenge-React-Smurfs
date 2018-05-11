import React from "react";
import { Link } from "react-router-dom";

const Smurf = props => {
  return (
    <div className="Smurf">
      {props.smurf.map(x => {
        return (
          <div>
            <h3>{x.name}</h3>
            <strong>{x.height} tall</strong>
            <p>{x.age} smurf years old</p>
            <Link></Link>
            <Link></Link>
          </div>
        );
      })}
    </div>
  );
};


export default Smurf;
