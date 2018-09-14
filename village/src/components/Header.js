import React from 'react';
import { Link } from 'react-router-dom'

const Header = (props) => {
  const button = props.location.pathname === "/"

  return (
  <React.Fragment>
    <h2>Welcome, guests, to the Smurf Village!</h2>
    {button}
    <Link to='/'> Home </Link>
    <Link to='/smurfs'> Enter the Village! </Link>
    <Link to='/smurf-form'> Immigration office </Link>
    <Link to='/smurf-update'> Records </Link>


</React.Fragment>)
}

export default Header;
