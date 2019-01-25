import React from "react";

const Smurf = props => {
  const handleClick = () => {
    props.handleButton(props.id);
  };

  return (
    <div>
      <h3>{props.name}</h3>
      <strong>{props.height}</strong>
      <p>{props.age}</p>
      <span onClick={handleClick} className="smurf-button" />
    </div>
  );
};

export default Smurf;
