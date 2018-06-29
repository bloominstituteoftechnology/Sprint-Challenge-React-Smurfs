import React from 'react';

const Smurf = props => {
  return (
    <div className="Smurf">
      <h3>{props.name}</h3>
      <strong>{props.height} tall</strong>
      <p>{props.age} smurf years old</p>
      <button onClick = {() => {
        props.deleteSmurfHandler(props.id);
        }}>Delete me</button>
        <button onClick = {() => {
          props.captureSmurfInfoHandler(props.id);

          props.showUpdateModalHandler();
          }}>Update Smurf</button>
    </div>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;

