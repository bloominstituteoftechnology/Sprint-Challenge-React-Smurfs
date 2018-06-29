import React from 'react';

const SmurfCard = props => {
    const { name, age, height } = props.smurf || props;
    return (
        <div className="Smurf">
            <h3>{name}</h3>
            <strong>{height} tall</strong>
            <p>{age} smurf years old</p>
        </div>
    );
}
export default SmurfCard;