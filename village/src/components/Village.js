import React from 'react';
import './Smurf.css';

function Village(props) {
    const routeToSmurfs = event => {
        event.preventDefault();
        props.history.push('/smurfs');
    };

    return (
        <div className="smurf-wrapper">
            <img className = "village-image" src='http://www.dvdtalk.com/reviews/images/reviews/197/full/1491046430_1.png' alt = "smurf village" />
            <button onClick={routeToSmurfs} className = "smurf-button">Smurf!</button>
        </div>
    );
}

export default Village;