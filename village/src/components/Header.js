import React from 'react';
import {Link} from 'react-router-dom'
import'./Header.css'

const Header = () => {
  return(
    <div>
   <h2>Welcome To Smurf Village!</h2>
   <Link to ="/smurfs"><button>May your day be Blue and Fun!</button></Link>
  </div>
  ) 
}
 
export default Header;