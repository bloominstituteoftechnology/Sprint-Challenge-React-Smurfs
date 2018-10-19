import React from 'react';
import { NavLink } from 'react-router-dom';

import './SmurfNav.css';

const SmurfNav = () => {
    return (
        <div className="smurf-nav">
            <NavLink to="/smurfs" activeClassName="selected">Smurf Village</NavLink>
            <NavLink to="/smurf-form" activeClassName="selected">New Villager</NavLink>
        </div>
    )
}

export default SmurfNav;