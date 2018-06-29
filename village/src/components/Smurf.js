import React from 'react';
import DeleteSmurf from './DeleteSmurf';
import UpdateSmurf from './UpdateSmurf';

const Smurf = ({ smurf, updateSmurfs }) => {
  return (
    <div className="Smurf">
      <h3>{smurf.name}</h3>
      <strong>{smurf.height} tall</strong>
      <p>{smurf.age} smurf years old</p>
      <UpdateSmurf smurf={smurf} updateSmurfs={updateSmurfs} />
      <DeleteSmurf updateSmurfs={updateSmurfs} id={smurf.id} />
    </div>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;
