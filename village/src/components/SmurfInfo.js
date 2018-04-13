import React from 'react';
import axios from 'axios';
import Smurf from './Smurf';
import Smurfs from './Smurfs';

function SmurfInfo(props) {
    return (
        <div className="Smurfs">
        <h1>Smurf Village</h1>
        <ul>
            {props.smurfs.map((smurf) => {
            return <Smurf delete={props.deleteSmurf} id={smurf.id} name={smurf.name} age={smurf.age} height={smurf.height} key={smurf.id} />;
            })}
            </ul>
        </div>
    );
}

export default SmurfInfo;