import React from 'react';
import axios from 'axios';

function deleteSmurf(smurfID){
  // alert(smurfID);
  axios.delete(`http://localhost:3333/smurfs/${smurfID}`)
    .then(response => {
      axios
      .get(`http://localhost:3333/smurfs`)
      .then(response => {
        this.setState(() => ({ smurfs: response.data }));
      })
      .catch(err => {
        console.error('Server Error', err);
      })
    })
    .catch(err => {
      console.error(err);
    })
}

const Smurf = props => {
  return (
    <div className="Smurf">
      <h3>{props.name}</h3>
      <strong>{props.height} tall</strong>
      <p>{props.age} smurf years old</p>
      <button onClick={() => deleteSmurf(props.id)} >Delete</button>
    </div>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;

