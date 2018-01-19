import React from 'react';

import Smurf from './Smurf';
import './Smurfs.css';

const Smurfs = (props) => {
  return (
    <div>
      <h1>Smurf Village</h1>
      <ul className="Smurfs">
        { props.smurfs.map((smurf) => {
          return <Smurf name={smurf.name} age={smurf.age} height={smurf.height} id={smurf.id} delete={props.delete} key={smurf.id} />;
        })}
      </ul>
    </div>
  );
}

export default Smurfs;