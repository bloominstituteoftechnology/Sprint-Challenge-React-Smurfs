import React from 'react';
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <h2>Everyone is welcome in Smurf Village!</h2>
      <h6>Except you Gagamesh</h6>
      <div><Link to = "/village"><button>Enter Village</button></Link></div>
    </div>
  )
}
 
export default Header;