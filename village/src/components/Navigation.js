import React from 'react';
import {NavLink} from 'react-router-dom';

const Navigation = () => {
    return (
        <div className="main-nav">
            <div className="main-nav-item">
                <NavLink to="/">Main</NavLink>
            </div>
            <NavLink to="/add">Add</NavLink>
        </div>
    )
}

export default Navigation;