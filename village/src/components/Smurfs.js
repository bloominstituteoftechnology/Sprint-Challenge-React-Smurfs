import React from 'react';
import Smurf from './Smurf';
import SmurfForm from './SmurfForm';

const Smurfs = props => {
  return (
    <div>
      <SmurfForm {...props} handleSetData={props.handleSetData} />

      <div className="Smurfs">
        <h1>Smurf Village</h1>
        <ul>
          {props.smurfs.map(smurf => {
            return (
              <Smurf
                name={smurf.name}
                id={smurf.id}
                age={smurf.age}
                height={smurf.height}
                key={smurf.id}
                deleteSmurf={props.deleteSmurf}
                handleSetData={props.handleSetData}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
}

Smurf.defaultProps = {
  smurfs: [],
};

export default Smurfs;
