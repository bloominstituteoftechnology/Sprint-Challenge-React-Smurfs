import React, { Component } from 'react';
import './Smurf.css';
import Smurf from './Smurf';

function Smurfs(props) {
  function routeToSmurf(ev, smurf) {
    ev.preventDefault();
    props.history.push(`/smurfs/${smurf.id}`);
    props.getSmurfById(smurf.id)
  }    
    return (
      <div className="Smurfs">
        <h1>Smurf Village</h1>
        <ul className = "smurfing-smurfers">
          {props.smurfs.map(smurf => {
            return (
              <Smurf
                onClick={ev => routeToSmurf(ev, smurf)}
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
    );
}





  


Smurf.defaultProps = {
 smurfs: [],
};

export default Smurfs;
