import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-brand">
                    WiredIn
                </div>
                <div className="footer-links">
                    <Link to="/terms" className="footer-link">Terms & Conditions</Link>
                    <Link to="/privacy" className="footer-link">Privacy Policy</Link>
                    <Link to="/contact" className="footer-link">Contact Us</Link>
                </div>
                <div className="footer-info">
                    © {new Date().getFullYear()} WiredIn. All rights reserved.
                </div>
            </div>
        </footer>
    );
}

export default Footer;
