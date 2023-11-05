import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUserCircle, faBriefcase } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';

function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    const closeMobileMenu = () => setMobileMenuOpen(false);

    return (
        <nav className="navbar">
            {/* Logo or Branding */}
            <div className="navbar-brand">
                <Link to="/" onClick={closeMobileMenu}>WiredIn</Link>
            </div>

            {/* Desktop Links */}
            <div className="navbar-links">
                <Link to="/" onClick={closeMobileMenu}>Home</Link>
                <Link to="/services" onClick={closeMobileMenu}>Services</Link>
                <Link to="/about" onClick={closeMobileMenu}>About</Link>
                {/* Add other links as needed */}
            </div>

            {/* Mobile Menu Icon */}
            <button 
                className="hamburger-menu" 
                onClick={toggleMobileMenu}
                aria-label="Mobile menu"
                aria-expanded={mobileMenuOpen}
            >
                ☰
            </button>

            {/* Mobile Links */}
            <div className={`mobile-navbar-links ${mobileMenuOpen ? 'open' : ''}`}>
                <Link to="/" onClick={closeMobileMenu}>
                    <FontAwesomeIcon icon={faHome} className="icon" /> Home
                </Link>
                <Link to="/services" onClick={closeMobileMenu}>
                    <FontAwesomeIcon icon={faBriefcase} className="icon" /> Services
                </Link>
                <Link to="/about" onClick={closeMobileMenu}>
                    <FontAwesomeIcon icon={faUserCircle} className="icon" /> About
                </Link>
                {/* Add other links as needed */}
            </div>
        </nav>
    );
}

export default Navbar;
