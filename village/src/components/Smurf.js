import React from 'react';

const Smurf = props => {

  const handleClick = () => {
    props.handleButton(props.id);
  }

  return (
    <div>
      <h3>{props.name}</h3>
      <strong>{props.height} tall</strong>
      <p>{props.age} smurf years old</p>
      <span onClick={handleClick} className="smurf-button"></span>
    </div>     
  );
};

export default Smurf;
