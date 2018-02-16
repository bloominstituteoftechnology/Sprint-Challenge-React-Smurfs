import React from 'react';
import Smurf from './Smurf';
import SmurfEdit from './SmurfEdit';

const Smurfs = (props) => {
  return (
    <div className="Smurfs">
      <h1>Smurf Village</h1>
      <ul>
        {props.smurfs.map((smurf, i) => {
          return (
            <div key={i}>
              <Smurf
                name={smurf.name}
                age={smurf.age}
                height={smurf.height}
                key={smurf.id}
              />
              <SmurfEdit getSmurfs={props.getSmurfs} smurf={smurf}  />
            </div>
          );
        })}
      </ul>
    </div>
  );
}

export default Smurfs;
