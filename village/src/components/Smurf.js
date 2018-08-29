import React from 'react';
import axios from 'axios';

const handleDelete = (event) => {
  const id = event.target.dataset.id;
  axios.delete(`http://localhost:3333/smurfs/${id}`).then(()=> {
      window.location.reload()
  });
}

const Smurf = props => {
 
  return (
    <div className="Smurf">
      <h3>{props.name}</h3>
      <strong>{props.height} tall</strong>
      <p>{props.age} smurf years old</p>
      <span data-id={props.id} onClick={handleDelete}>X</span>
    </div>
  );
};

export default Smurf;
