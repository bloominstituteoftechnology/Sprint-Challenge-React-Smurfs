import React from 'react';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';

const Header = props => {
  return (
    <React.Fragment>
      <h1>Welcome! You are about to enter the smurf village!!</h1>
      <h2>We hope your time there is pleasant :)</h2>
      <hr />
      <Link style={{ textDecoration: 'none' }} to="/village">
        <Button color="success">Enter the Smurf Village</Button>
        {'  '}
      </Link>
      <Link style={{ textDecoration: 'none' }} to="/new">
        <Button color="info">Enter Immigration</Button>
      </Link>
    </React.Fragment>
  );
};

export default Header;
