import React from 'react';
import PropTypes from 'prop-types';

import Smurf from './Smurf';

function Smurfs(props) {
  console.log(props);

  return (
    <div className="Smurfs">
      <h1>Smurf Village</h1>
      <ul>
        {props.smurfs.map(smurf => (
          <Smurf
            key={smurf.id}
            smurf={smurf}
          />
        ))}
      </ul>
    </div>
  );
}

Smurfs.propTypes = {
  smurfs: PropTypes.arrayOf(PropTypes.object),
  newSmurf: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    age: PropTypes.number,
    height: PropTypes.string
  })
};

export default Smurfs;