import React from 'react';

// const deleteSmurf = smurfID => {
//     axios
//       .delete(`http://localhost:3333/smurfs/${smurfID}`)
//       .then(response => {console.log(response)})
//
//   }

const Smurf = props => {
  return (
    <div className="Smurf">
      <h3>{props.name}</h3>
      <strong>{props.height} tall</strong>
      <p>{props.age} smurf years old</p>
    </div>
  );
};

export default Smurf;
