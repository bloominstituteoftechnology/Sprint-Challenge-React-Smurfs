import React from 'react';

function Village(props) {
    const routeToSmurfs = event => {
        event.preventDefault();
        props.history.push('/smurfs');
    };

    return (
        <div className="smurf-wrapper">
            <img className = "village-image" src='http://flashmangames.com/wp-content/uploads/2016/11/SmurfsTwitterHeader_1.jpg' alt = "smurf village" />
            <button onClick={routeToSmurfs} className = "smurf-button">Smurf!</button>
        </div>
    );
}

export default Village;