import React from 'react';
import Smurf from './Smurf';

function Smurfs (props) {

  return (
    <div className="Smurfs">
      <h1>Smurf Village</h1>
      <ul>
        { props.smurfs.map((smurf) => {
          return (
            <Smurf key={smurf.id} id={smurf.id} name={smurf.name} age={smurf.age} height={smurf.height} loadSmurfs={props.loadSmurfs}/>
          )
        })}
      </ul>
    </div>
  );
}

export default Smurfs;