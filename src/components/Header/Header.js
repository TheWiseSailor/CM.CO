// <a href='https://pngtree.com/freepng/rhino-modeling-gamepad_5972565.html'>png image from pngtree.com/</a>
import React, { useState } from 'react';
import './Header.css';
import MMI from './HeaderImages/MobileMenuIcon.png';

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={`header ${isSticky ? 'sticky' : ''}`}>
      <div className="container">
        <div className="logo">Logo</div>
        <nav className={`navbar ${isMobileMenuOpen ? 'open' : ''}`}>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
          </ul>
        </nav>
        <div className={`mobile-menu-icon ${isMobileMenuOpen ? 'active' : ''}`} onClick={toggleMobileMenu}>
          <img src={MMI} alt="Mobile Menu" className='MMI-icon'/>
        </div>
      </div>
    </header>
  );
};

export default Header;
