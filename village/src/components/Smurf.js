import React from 'react';

const Smurf = props => {
  // const id = props.match.params.id;
  // const smurf = props.smurfs.find(smurf => {
  //   return `${smurf.id}` === id;
  // })

  // function handleDelete() {
  //   props.deleteSmurf(smurf.id)
  // }

  return (
    <div className="Smurf">
      <h3>{props.name}</h3>
      <strong>{props.height} tall</strong>
      <p>{props.age} smurf years old</p>
      {/* <button onClick={handleDelete}>Delete Smurf</button> */}
    </div>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;

