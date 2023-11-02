import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';

function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    return (
        <nav className="navbar">
            {/* Logo or Branding */}
            <div className="navbar-brand">
                <Link to="/">TradeSwap</Link>
            </div>

            {/* Desktop Links */}
            <div className="navbar-links">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                {/* Add other links as needed */}
            </div>

            {/* Mobile Menu Icon */}
            <div className="hamburger-menu" onClick={toggleMobileMenu}>
                ☰
            </div>

            {/* Mobile Links */}
            <div className={`mobile-navbar-links ${mobileMenuOpen ? 'open' : ''}`}>
                <Link to="/" onClick={toggleMobileMenu}>
                    <FontAwesomeIcon icon={faHome} className="icon" /> Home
                </Link>
                <Link to="/about" onClick={toggleMobileMenu}>
                    <FontAwesomeIcon icon={faInfoCircle} className="icon" /> About
                </Link>
                {/* Add other links as needed */}
            </div>
        </nav>
    );
}

export default Navbar;
