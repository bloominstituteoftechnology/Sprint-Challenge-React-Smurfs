import React from 'react';
import SmurfList from './SmurfList';
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
              <SmurfList
                name={smurf.name}
                id={smurf.id}
                age={smurf.age}
                height={smurf.height}
                key={smurf.id}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
}

SmurfList.defaultProps = {
  smurfs: [],
};

export default Smurfs;
