import React from "react";
import {withRouter} from 'react-router-dom'


const Smurf = props => {
function routeToSmurf(ev) {
  ev.preventDefault()
  props.history.push(`/village/${props.id}`)
  
}
  return (
    <div className="Smurf">
      <img src={props.imgUrl} alt={props.name} />
      <div className="flexyDiv">
        <h3>{props.name}</h3>
        <p><strong>Smurfey Height:</strong> {props.height} tall</p>
        <p><strong>Smurfey Age:</strong> {props.age} smurf years old</p>
        <button onClick={ev => routeToSmurf(ev, props.id)}>Select Smurf</button>
        <button onClick={event => props.deleteSmurf(event, props.id)}>Clear Smurf</button>
      </div>
    </div>
  );
};

Smurf.defaultProps = {
  name: "",
  height: "",
  age: ""
};

export default withRouter(Smurf);
