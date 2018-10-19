import React from 'react'
import {NavLink} from 'react-router-dom'

const NavBar = () =>{
    return (
        <div style={{width:'250px', display:'flex',justifyContent:'space-between', margin:'20px auto'}}>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/smurf-form' activeStyle={{textDecoration:'none', cursor:'unset'}}>Add Smurf</NavLink>
        </div>
    )
}

export default NavBar