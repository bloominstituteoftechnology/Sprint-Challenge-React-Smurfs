import React  from 'react';

import Smurf from './Smurf';

const Smurfs = (props) => {

 
    return (
      <div className="Smurfs">
        <h1>Smurf Village</h1>
        <ul>
          { props.smurfs.map((smurf) => {
          return <Smurf name={smurf.name} age={smurf.age} height={smurf.height} key={smurf.id} id={smurf.id} onDelete={props.deleteSmurf} />;
          })}
        </ul>
      </div>
    );

}

export default Smurfs;