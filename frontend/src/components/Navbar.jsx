import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CiSearch } from 'react-icons/ci'; // Import the search icon
import './styles/Navbar.css'; // Import the CSS file

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to toggle the menu visibility

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle the menu visibility
  };

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className={`navbar-logo ${isMenuOpen ? 'show' : ''}`}>
        <Link to="/">
          <img
            src="https://res.cloudinary.com/dwcxwpn7q/image/upload/v1735652748/intern%20frontend/logo_transparent_a3smzr.png" // Replace with your logo URL
            alt="Logo"
            className="logo"
          />
        </Link>
      </div>

      {/* Mobile Menu */}
      <div className={`navbar-left ${isMenuOpen ? 'open' : ''}`}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="#">About</Link></li>
        <li><Link to="#">Contact</Link></li>
        <li><Link to="#">Blog</Link></li>
      </div>

      <div className={`navbar-right ${isMenuOpen ? 'show' : ''}`}>
        <div className="search-bar-container">
          <input
            type="text"
            placeholder="Search..."
            className="navbar-search"
          />
          <CiSearch className="search-icon" />
        </div>
        <span className="auth-links">
          <Link to="#">Sign In</Link> | <Link to="#">Sign Up</Link>
        </span>
      </div>

      {/* Hamburger Icon */}
      <div className={`hamburger ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>

      {/* Overlay for mobile menu */}
      {isMenuOpen && <div className="overlay" onClick={toggleMenu}></div>}
    </nav>
  );
};

export default Navbar;
