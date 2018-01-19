import React from 'react';
import { NavLink } from 'react-router-dom';

import './Smurfs.css';

import Smurf from './Smurf';

const Smurfs = props => {
  const smurfs = props.smurfs;

  return (
    <div className="Smurfs">
      <h1>Smurf Village</h1>
      <ul className="SmurfsGrid">
        {smurfs.map(smurf => {
          return (
            <NavLink
              to={`/smurfs/${smurf.id}/${smurf.name}/${smurf.age}/${
                smurf.height
              }`}
              key={smurf.id}
            >
              <Smurf name={smurf.name} age={smurf.age} height={smurf.height} />
            </NavLink>
          );
        })}
      </ul>
    </div>
  );
};

export default Smurfs;
