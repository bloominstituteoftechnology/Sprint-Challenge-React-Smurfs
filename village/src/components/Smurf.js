import React from 'react';
import { Link } from 'react-router-dom';

const Smurf = props => {
  console.log(props.match.params.id);
  const selectedSmurf = props.smurfs.find(smurf => `${smurf.id}` === props.match.params.id);
  console.log(selectedSmurf);
  return (
    <div className="Smurf">
      <h3>{selectedSmurf.name}</h3>
      <strong>{selectedSmurf.height} tall</strong>
      <p>{selectedSmurf.age} smurf years old</p>
      
      <button onClick={() => {
        props.removeSmurf(
          props.match.params.id
          );
          props.history.push("/");
        }}
        >
          Delete Smurf
        </button>

        <Link to={`/smurf-edit/${selectedSmurf.id}`}><button>Edit Smurf</button></Link>
    </div>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;

