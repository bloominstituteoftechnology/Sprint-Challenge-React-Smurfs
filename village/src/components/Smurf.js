import React from 'react';

const Smurf = (props) => {
  if(props.name === undefined){
    return(<span></span>);
  }
  else{
  return (

    <div className="Smurf">
    {console.log(props.name)}
      <h3>{props.name}</h3>
      <strong>{props.height} feet tall</strong>
      <p>{props.age} years old</p>
    </div>
  );
  }
}

export default Smurf;
