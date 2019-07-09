import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class NavBar extends Component {
    render() {
        return (
            <Nav>
                <NavContainer>
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='/smurf-form'>Add Smurf</NavLink>
                </NavContainer>
            </Nav>
        )
    }
}