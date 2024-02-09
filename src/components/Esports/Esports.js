import React from 'react';
import './Esports.css';
import EBImage from '../Esports/EsportsImages/EB.png';
import ES1Image from '../Esports/EsportsImages/ES1.png'; 

function EsportsPage() {
  return (
    <div className='Esports-EB'>
      <div className="esports-page">
        <main className="esports-main">
          <div className="Esports-image-container">
            <img src={EBImage} alt="Esports Banner" className='Esports-E1' />
            <div className="Esports-text-overlay">
              UNCW Esports
            </div>
          </div>
          <div className="Esports-content">
            <div className="content-wrapper">
              <p className='AboutUs'>
              At UNCW Esports, we're a dynamic community that embraces creativity and technology, extending beyond traditional filmmaking to competitive gaming. With teams in Smash, Halo, Call of Duty, Apex Legends, Valorant, League of Legends, and Rocket League, students immerse themselves in esports, honing skills and building friendships. Our members embody innovation and collaboration, shaping the future of cinema and gaming. Welcome to UNCW Esports, where creativity knows no bounds.              </p>
              <img src={ES1Image} alt="ES1" className='ES1-image' />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default EsportsPage;
