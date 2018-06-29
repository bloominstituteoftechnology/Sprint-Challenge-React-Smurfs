import React from 'react';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';

const NavBar = () => (
  <Link to="/">
    <Button style={{ marginLeft: '-65%' }} color="primary">
      Home
    </Button>
  </Link>
);

export default NavBar;
