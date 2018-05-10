import React from 'react';

import Smurf from './Smurf';

const Smurfs = (props) => {
  console.log("props", props)
  return (
    <div className="Smurfs">
      <h1>Smurf Village</h1>
      <ul>
        <Smurf {...props} />
      </ul>
    </div>
  );
}

export default Smurfs;
