import React from 'react';
import axios from 'axios';

const Smurf = props => {

  const sendtoSHADOWREALM = () => {
    alert(`Sending ${props.name} on a journey... to the SHADOW REALM`);
    axios.delete(`http://localhost:3333/smurfs/${props.id}`)
      .then(response => props.update(response.data))
      .catch(error => console.log(error));
  }

  return (
    <div className="Smurf">
      <h3>{props.name}</h3>
      <strong>{props.height} tall</strong>
      <p>{props.age} smurf years old</p>
      <button onClick={sendtoSHADOWREALM}>Send {props.name} on a journey...</button>
    </div>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;

