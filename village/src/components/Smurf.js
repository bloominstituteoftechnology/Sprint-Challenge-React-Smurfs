import React from 'react';
import axios from 'axios';

function DeleteSmurf (props) {
  console.log(props);
  axios.delete(`http://localhost:3333/smurfs/${props.id}`)
    .then((response) => {
      console.log('Smurf Deleted' + response)
    })
    .catch(error => {
      console.error(error);
    });
}

const Smurf = props => {
  return (
    <div className="Smurf">
      <h3>{props.name}</h3>
      <strong>{props.height} tall</strong>
      <p>{props.age} smurf years old</p>
      <button onClick={DeleteSmurf(props)}>X</button>
    </div>
  );
};

export default Smurf;
