import React from 'react';
import Smurf from './Smurf';

function Smurfs (props) {

  return (
    <div className="Smurfs">
      <h1>Smurf Village</h1>
      <ul>
        {props.smurfs.map((smurf) => {
          return (
            <Smurf key={smurf.id} name={smurf.name} age={smurf.age} height={smurf.height} uploadedSmurfs={props.uploadedSmurfs}/>
          )
        })}
      </ul>
    </div>
  );
}



export default Smurfs;