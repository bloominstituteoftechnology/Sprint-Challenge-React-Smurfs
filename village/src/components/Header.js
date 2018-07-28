import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {
  return (
  <div>
    <h1>Get Ready to Enter the Smurf Village</h1> 
    <Link to='/village'><button style={{width:'200px', height:'100px', fontSize:'28px', borderRadius:'5px', backgroundColor:'royalblue', color:'white', border:'none', padding:'10px', outline:'none', cursor:'pointer'}}>Let's go inside! </button>
    </Link>
      <br/><br/></div>
  )
}
 
export default Header;