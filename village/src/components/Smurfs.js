import React from 'react';

import Smurf from './Smurf';

const Smurfs = ({ smurfs, remove }) => (
      <div className="Smurfs">
        <h1>Smurf Village</h1>
        <ul>
          { smurfs.map((smurf, i) => {
            return <Smurf name={smurf.name} age={smurf.age} height={smurf.height} key={i} remove={()=> remove(smurf.id)}/>;
          })}
        </ul>
      </div>
    );

export default Smurfs;