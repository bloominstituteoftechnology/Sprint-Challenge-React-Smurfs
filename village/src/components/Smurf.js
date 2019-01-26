import React from "react";
import { Route } from "react-router-dom";

const Smurf = props => {
  const killSmurf = e => {
    e.preventDefault();
    props.kill(`http://localhost:3333/smurfs/${props.id}`);
    props.update("http://localhost:3333/smurfs");
  };

  return (
    <div className="Smurf">
      <h3>{props.name}</h3>
      <strong>{props.height} tall</strong>
      <p>{props.age} smurf years old</p>
      <Route
        path="/gargamel"
        render={props => <button onClick={killSmurf}>Destroy</button>}
      />
    </div>
  );
};

Smurf.defaultProps = {
  name: "",
  height: "",
  age: ""
};

export default Smurf;
