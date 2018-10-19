import React from 'react'
import { NavLink } from 'react-router-dom'
import '../App.css'

const Nav = () => {
    return (
        <nav>
            <NavLink className="link" to="/">Home</NavLink>
            <NavLink className="link" to="/smurf-form">Smurf Form</NavLink>
        </nav>
    )
}

export default Nav