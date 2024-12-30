import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Navbar.css'; // Import the CSS file

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-left">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
      <div className="navbar-right">
        <input
          type="text"
          placeholder="Search..."
          className="navbar-search"
        />
        <span className="auth-links">
          <Link to="/signin">Sign In</Link> | <Link to="/signup">Sign Up</Link>
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
