import React from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';

const Header = () => {
  return <React.Fragment>
    <h2 
      style={{color: 'cornflowerblue', fontSize: '4rem'}}
    >
      welcome to the smurf village!
    </h2>
    <Link
      to='/smurfs'
      style={{textDecoration: 'none'}}
    >
      <Button>enter</Button>
    </Link>
  </React.Fragment>
}
 
export default Header;
