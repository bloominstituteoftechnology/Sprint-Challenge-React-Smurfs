import React from 'react';
import {NavLink} from 'react-router-dom';

const Navigation = () => {
    return (
        <div className="Navigation">
            <NavLink to="/">Smurf Village</NavLink>
            <NavLink to="/smurf-form">Add a Smurf</NavLink>
        </div>
    );
}

export default Navigation;