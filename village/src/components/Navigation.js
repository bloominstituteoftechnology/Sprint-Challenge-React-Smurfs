import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import '../index.css'

export default class Navigation extends React.Component {
  render() {
    return (
      <div>
        <NavLink to='/'>Smurf List</NavLink>
        <NavLink to='smurf-form'>Add a Smurf</NavLink>
      </div>
    )
  }
}
