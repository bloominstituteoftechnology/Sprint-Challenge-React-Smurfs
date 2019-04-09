import React from "react";
import {Route} from "react-router-dom";

const Smurf = props => {
  return (
    <Route path={`/smurf/:${props.id}`}>
      {/* render={props => ( {...props} */}
      <div className="Smurf">
        <h2>{props.name}</h2>
        <strong>{props.height} tall</strong>
        <p>{props.age} smurf years old</p>
      </div>
    </Route>
  );
};

// <div className="Smurf">
//     <h3>{props.name}</h3>
//     <strong>{props.height} tall</strong>
//     <p>{props.age} smurf years old</p>
//   </div>

Smurf.defaultProps = {
  name: "",
  height: "",
  age: ""
};

export default Smurf;
