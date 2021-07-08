import React from 'react';
import {NavLink} from 'react-router-dom';

function SmurfNav(props) {
    return (
        <div className="smurf-nav">
            <NavLink to="/">Village</NavLink>
            <NavLink to="/smurf-form">Join The Smurfs</NavLink>
        </div>
    );
}

export default SmurfNav;
