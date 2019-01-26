import React from 'react';

import Smurf from './Smurf';

const Smurfs = props => {
  
    return (
      <div className="Smurfs">
        <h1>Smurf Village</h1>
        <ul>
          {props.smurfs.map(smurf => {
            return (
              <p onclick={()=>routeToSmurf(props,smurf)} >
              <Smurf
                name={smurf.name}
                id={smurf.id}
                age={smurf.age}
                height={smurf.height}
                key={smurf.id}
              />
              </p>
            );
          })}
        </ul>
      </div>
    );
  
}

function routeToSmurf(props, smurf) {
  props.history.push(`/smurfs/${smurf.id}`)
}

Smurf.defaultProps = {
 smurfs: [],
};

export default Smurfs;
