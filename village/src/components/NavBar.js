import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export class Navbar extends Component {
    render() {
        return (
            <div>
                <div>
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='/smurf-form'>Add Smurf</NavLink>
                </div>
            </div>
        )
    }
}