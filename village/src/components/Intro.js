import React from 'react';
import { NavLink } from 'react-router-dom';
import '../App.css'

export default function Intro() {
  return (
    <div>
     <NavLink to='/smurf-form'> <h3>Enter the Smurf Village</h3></NavLink>
    </div>
  )
}

