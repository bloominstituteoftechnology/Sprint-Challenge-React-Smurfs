import React from 'react';

import Smurf from './Smurf';

const Smurfs = (props) => {
  console.log("props", props)
  return (
    <div className="Smurfs">
      <ul>
        <Smurf {...props} />
      </ul>
    </div>
  );
}

export default Smurfs;
