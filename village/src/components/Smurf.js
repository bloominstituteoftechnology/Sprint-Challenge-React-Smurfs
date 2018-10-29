import React from "react";
import {withRouter} from 'react-router-dom'


const Smurf = props => {
function routeToSmurf(ev) {
  ev.preventDefault()
  props.history.push(`/village/${props._id}`)
}



  

  return (
    <div className="Smurf">
      <div className="smurfImg"/>
      <div className="flexyDiv">
        <h3>{props.name}</h3>
        <p><strong>Title:</strong> {props.title}</p>
        <p><strong>Note:</strong> {props.textBody}</p>
        <button onClick={ev => routeToSmurf(ev, props._id)}>Select Smurf</button>
        <button onClick={ev => props.deleteSmurf(ev, props._id)}>Delete Note</button>
        <button onClick={ev => {props.toggleEditNoteForm(ev, props.note)}}> Edit Info </button>
      </div>
    </div>
  );
};



export default withRouter(Smurf);
