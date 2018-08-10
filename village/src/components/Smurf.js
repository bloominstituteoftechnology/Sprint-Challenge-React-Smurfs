import React from 'react';
import axios from 'axios'

const Smurf = props => {
  return (
    <div className="Smurf">
      <h3>{props.name}</h3>
      <strong>{props.height} tall</strong>
      <p>{props.age} smurf years old</p>
      <button id={props.id} onClick={onDelete}>Delete</button>
    </div>
  );
};

function onDelete (event) {
  const id = event.target.id
  const history = event.target.history
  axios.delete(`http://localhost:3333/smurfs/${id}`)
    .then(res => window.location.reload)
    .catch(err => console.log(err))
}

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;

