import React from 'react';

const Smurf = (props) => {
  return (
    <div smurfid={props.id} className="Smurf">
      <h3>{props.name}</h3>
      <strong>{props.height} tall</strong>
      <p>{props.age} old</p>
      <span onClick={() => {props.deletesmurf(props.id)}} style={{color:'red'}}>delete</span>
    </div>
  );
}

export default Smurf;