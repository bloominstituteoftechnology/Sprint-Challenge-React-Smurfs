import React from "react";
import { Route, Link, NavLink } from "react-router-dom";

const Smurf = props => {
  return (
    <section className="smurfContainer">
      <Link to={`/smurf/${props.smurf.id}`} className="smurf"> 
        <div className="name">
          <h3>{props.smurf.name}</h3>
          <p onClick={event => props.deleteSmurf(event, props.smurf.id)}> X </p>
        </div>
        <strong>{props.smurf.height} tall</strong>
        <p>{props.smurf.age} smurf years old</p>
      </Link>

      <button onClick={e => props.updateSmurf(props.smurf.id)}> Edit</button>
    </section>
  );
};

Smurf.defaultProps = {
  name: "",
  height: "",
  age: ""
};

export default Smurf;
