// <a href='https://pngtree.com/freepng/rhino-modeling-gamepad_5972565.html'>png image from pngtree.com/</a>

import React, { useState, useEffect } from 'react';
import './Header.css';
import MMI from './HeaderImages/MobileMenuIcon.png';
import { Link, useLocation } from 'react-router-dom'; 

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isEsportsPage, setIsEsportsPage] = useState(false);

  const location = useLocation();

  useEffect(() => {
    setIsEsportsPage(location.pathname === "/Esports");
  }, [location]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className='HeaderPrimary'>
      <header className={`header ${isSticky ? 'sticky' : ''} ${isEsportsPage ? 'esports' : ''}`}>
        <div className="container">
          <Link to="/" className="logo">CM.CO</Link>
          <nav className={`navbar ${isMobileMenuOpen ? 'open' : ''}`}>
            <ul className={isEsportsPage ? 'esports-page' : ''}>
            <li><Link to="/Business"> Business </Link></li>
            <li><Link to="/Contact"> Contact</Link></li>
              <li><Link to="/Esports">Esports</Link></li> 
            
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
