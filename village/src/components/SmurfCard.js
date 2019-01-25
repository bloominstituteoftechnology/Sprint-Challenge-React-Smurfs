import React from 'react';

const SmurfCard = props => {
    return (
        <div>
            <div>{props.smurfs.name}</div>
            <strong>{props.smurfs.height} tall</strong>
            <p>{props.smurfs.age} smurf years old</p>
        </div>
    )
}

export default SmurfCard;