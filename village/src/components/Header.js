import React from 'react';
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
        <h3> Welcome, honored guest.  You have been cordially invited to Smurf Village. </h3>
        <Link to="/smurfs"> Click here to enter Smurf Village </Link>
    </div>
  )
}
  
 
export default Header;