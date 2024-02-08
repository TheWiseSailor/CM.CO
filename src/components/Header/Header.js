// <a href='https://pngtree.com/freepng/rhino-modeling-gamepad_5972565.html'>png image from pngtree.com/</a>
import React, { useState } from 'react';
import './Header.css';
import MMI from './HeaderImages/MobileMenuIcon.png';
import { Link } from 'react-router-dom'; 

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className='HeaderPrimary'>
      <header className={`header ${isSticky ? 'sticky' : ''}`}>
        <div className="container">
          <Link to="/" className="logo">CM.CO</Link>
          <nav className={`navbar ${isMobileMenuOpen ? 'open' : ''}`}>
            <ul>
              <li><Link to="/Contact">Contact</Link></li> 
            </ul>
          </nav>
          <div className={`mobile-menu-icon ${isMobileMenuOpen ? 'active' : ''}`} onClick={toggleMobileMenu}>
            <img src={MMI} alt="Mobile Menu" className='MMI-icon'/>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;