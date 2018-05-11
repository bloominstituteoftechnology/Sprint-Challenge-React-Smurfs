import React from 'react';
import { Link } from 'react-router-dom';

const SmurfCard = (props) => {
  return (
    <div className="smurf-card">
      <Link to={`/smurfs/${props.id}`} className="smurf-name"><h3>{props.name}</h3></Link>
      <strong>{props.height} tall</strong>
      <p>{props.age} smurf years old</p>
    </div>
  );
};

export default SmurfCard;