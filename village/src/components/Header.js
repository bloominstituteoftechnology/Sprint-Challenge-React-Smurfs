import React from 'react';
import {Link} from 'react-router-dom'

const Header = () => {
  return(
<nav>
<Link to = '/'>home</Link>
<Link to = '/smurfs-form'>form</Link>
  </nav>

  )
  
}
 
export default Header;