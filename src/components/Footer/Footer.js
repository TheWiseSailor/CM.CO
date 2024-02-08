import React, { useState, useEffect } from 'react';
import './Footer.css';
import { useLocation } from 'react-router-dom';

const Footer = () => {
  const [isEsportsClicked, setIsEsportsClicked] = useState(false);

  const location = useLocation();

  useEffect(() => {

    setIsEsportsClicked(location.pathname === "/Esports");
  }, [location]);

  return (
    <footer className={`footer ${isEsportsClicked ? 'esports' : ''}`}>
      <p className='ft'>CM.CO &copy; All rights reserved.</p>
    </footer>
  );
};

export default Footer;
