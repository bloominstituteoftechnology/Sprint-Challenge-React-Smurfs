import React from 'react';
import { Link } from 'react-router-dom';

const styled = {
  textDecoration: 'none',
  color: 'red'
}

const Smurf = props => {
  return (
      <div className="smurfs">
        <Link to={`/smurf/${props.id}`} style={styled} >
          <div className="smurf_name" ><h3>{props.name}</h3></div>
          <div className="smurf_age" ><strong>{props.height} tall</strong></div>
          <div className="smurf_email" ><p>{props.age} smurf years old</p></div>
        </Link>
      </div>
  );
};

export default Smurf;