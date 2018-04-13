import React from 'react';

const Smurf = props => {
  return (

    <div className="Smurf">
        {console.log('inside smurf',props)}
      <h3>{props.name}</h3>
      <strong>{props.height} tall</strong>
      <p>{props.age} smurf years old</p>
      {console.log('inside smurf2',props.deleteSelf)}
      <button  onClick={() => props.deleteSelf(props.id)}>Delete</button>
    </div>
  );
};

export default Smurf;
