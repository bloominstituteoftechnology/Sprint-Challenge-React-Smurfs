import React, { Component } from 'react'
import { Link } from 'react-router-dom';

const Navbar = (props) => {
    const {branding} = props;
    return (
      <nav className="navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0">
        <div className="container">
            <a href="/" className="navbar-brand">{branding}</a>
        </div>

        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item"><Link to="/" className="nav-link">< i className="fas fa-home"></i>Home</Link></li>
            <li className="nav-item"><Link to="/about" className="nav-link">< i className="fas fa-question"></i>About</Link></li>
          </ul>
        </div>
      </nav>
          
    )
}

export default Navbar;