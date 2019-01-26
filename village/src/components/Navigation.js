import React from 'react';
import { FaHome,  FaPlusCircle } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
      <ul>
        <li>
          <NavLink to={'/'}><FaHome/></NavLink>
        </li>
        <li>
          <NavLink to={'/smurf-form'}><FaPlusCircle /></NavLink>
        </li>
    </ul>
  );
};

export default Navigation;
