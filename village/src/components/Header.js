import React from 'react';
import { Link } from 'react-router-dom'

const Header = (props) => {
  console.log(props.location);
  const button = props.location.pathname === "/"
  ? <Link to='/smurfs'> Enter the Village! </Link>
  : <Link to='/'> Home </Link>
  console.log(button);
  return (
  <React.Fragment>
    <h2>Welcome, guests, to the Smurf Village!</h2>
    {button}


</React.Fragment>)
}

export default Header;
