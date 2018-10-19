import React from 'react';
import { NavLink } from 'react-router-dom'
import { StyledButton } from '../Style';

const Header = () => {
    return (
        <div>
            <NavLink exact to="/">Home</NavLink>
            <NavLink to="/smurf-form">Add</NavLink>
        </div>
    );
}

export default Header;
