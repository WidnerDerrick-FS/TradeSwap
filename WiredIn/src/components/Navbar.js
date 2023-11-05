import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faUserCircle,
  faBriefcase,
  faProjectDiagram,
  faTools,
  faEnvelope,
  faQuestionCircle,
  faUserPlus
} from '@fortawesome/free-solid-svg-icons';
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
                <Link to="/" onClick={closeMobileMenu}>
                    <FontAwesomeIcon icon={faHome} /> Home
                </Link>
                <Link to="/explore" onClick={closeMobileMenu}>
                    <FontAwesomeIcon icon={faBriefcase} /> Explore Services
                </Link>
                <Link to="/post-project" onClick={closeMobileMenu}>
                    <FontAwesomeIcon icon={faProjectDiagram} /> Post a Project
                </Link>
                <Link to="/resources" onClick={closeMobileMenu}>
                    <FontAwesomeIcon icon={faTools} /> Resources for Freelancers
                </Link>
                <Link to="/messages" onClick={closeMobileMenu}>
                    <FontAwesomeIcon icon={faEnvelope} /> Messages
                </Link>
                <Link to="/about" onClick={closeMobileMenu}>
                    <FontAwesomeIcon icon={faUserCircle} /> About
                </Link>
                <Link to="/help" onClick={closeMobileMenu}>
                    <FontAwesomeIcon icon={faQuestionCircle} /> Help
                </Link>
                <Link to="/signup" className="signup-btn" onClick={closeMobileMenu}>
                    <FontAwesomeIcon icon={faUserPlus} /> Sign Up
                </Link>
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
                <Link to="/explore" onClick={closeMobileMenu}>
                    <FontAwesomeIcon icon={faBriefcase} className="icon" /> Explore Services
                </Link>
                <Link to="/post-project" onClick={closeMobileMenu}>
                    <FontAwesomeIcon icon={faProjectDiagram} className="icon" /> Post a Project
                </Link>
                <Link to="/resources" onClick={closeMobileMenu}>
                    <FontAwesomeIcon icon={faTools} className="icon" /> Resources for Freelancers
                </Link>
                <Link to="/messages" onClick={closeMobileMenu}>
                    <FontAwesomeIcon icon={faEnvelope} className="icon" /> Messages
                </Link>
                <Link to="/about" onClick={closeMobileMenu}>
                    <FontAwesomeIcon icon={faUserCircle} className="icon" /> About
                </Link>
                <Link to="/help" onClick={closeMobileMenu}>
                    <FontAwesomeIcon icon={faQuestionCircle} className="icon" /> Help
                </Link>
                <Link to="/signup" onClick={closeMobileMenu} className="icon signup-btn">
                    <FontAwesomeIcon icon={faUserPlus} /> Sign Up
                </Link>
            </div>
        </nav>
    );
}

export default Navbar;
