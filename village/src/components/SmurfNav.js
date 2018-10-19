import React from 'react';
import { NavLink } from 'react-router-dom';

const SmurfNav = () => {
    return (
        <div className="smurf-nav">
            <NavLink exact to="/">Smurf Village</NavLink>
            <NavLink to="/smurf-form">New Villager</NavLink>
        </div>
    )
}

export default SmurfNav;