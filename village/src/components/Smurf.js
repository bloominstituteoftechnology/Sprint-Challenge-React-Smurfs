import React from 'react';
import axios from 'axios'


const Smurf = props => {
  return (
    <div className="Smurf">
      <h3>{props.name}</h3>
      <strong>{props.height} tall</strong>
      <p>{props.age} smurf years old</p>
      <button onClick={deleteSmurf} id={props.id}>Delete</button>

    </div>
  );
};

function deleteSmurf (event) {
  event.preventDefault();
  const id = event.target.id
  const history = event.target.history
  axios.delete(`http://localhost:3333/smurfs/${id}`)
    .then(response => console.log(response))
    .catch(err => console.log(err))
    window.location.reload();
}

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;

