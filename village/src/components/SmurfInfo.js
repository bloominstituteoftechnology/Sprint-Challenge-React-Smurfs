import React from 'react';
import Smurf from './Smurf';

function SmurfInfo(props) {
    return (
        <div className="Smurfs">
        <ul>
            {props.smurfs.map((smurf) => {
            return <Smurf deleteSmurf={props.deleteSmurf} id={smurf.id} name={smurf.name} age={smurf.age} height={smurf.height} key={smurf.id} />;
            })}
            </ul>
        </div>
    );
}

export default SmurfInfo;