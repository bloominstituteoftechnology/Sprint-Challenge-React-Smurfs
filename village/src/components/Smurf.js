
import React from 'react';
import axios from 'axios';

const Smurf = props => {

  const handleClick = () => {
    props.handleButton(props.id);
  }

  return (
    <div>
      <h3>{props.name}</h3>
      <strong>{props.height} Tall</strong>
      <p>{props.age} smurf years old</p>
      <span onClick={handleClick} className="smurf-button"></span>
    </div>     
  );
};

export default Smurf;