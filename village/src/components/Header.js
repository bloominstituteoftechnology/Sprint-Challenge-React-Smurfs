import React from 'react';
import {Link} from 'react-router-dom'

const Header = () => {
  return(
    <div>
   <h2>Welcome To Smurf Village!</h2>
   <Link to ="/">
   <button>May your day be Blue and Fun!</button>
   </Link>
    </div>
  ) 
}
 
export default Header;