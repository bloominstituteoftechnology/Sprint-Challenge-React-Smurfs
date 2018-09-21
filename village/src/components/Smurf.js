import React from 'react';

function Smurf (props) {
    console.log(props);
    const smurf = props.smurfs.find(
      smurf => `${smurf.id}` === props.match.params.id
    );
  
  function handleDelete() {
    props.handleDelete(props.smurfs.id);
    props.history.push('/smurfs');
  }
 

  return (
    <div className="Smurf">
      <h3>{props.name}</h3>
      <strong>{props.height} tall</strong>
      <p>{props.age} smurf years old</p>
      <button onClick={handleDelete} >Delete</button>
    </div>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;

