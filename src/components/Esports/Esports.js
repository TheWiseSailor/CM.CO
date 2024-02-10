import React from 'react';
import './Esports.css';
import EBImage from '../Esports/EsportsImages/EB.png';
import ES1Image from '../Esports/EsportsImages/ES1.png'; 
import ProfileImage from '../Esports/EsportsImages/ES2.png'; 

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

          <div className="AboutMe-content">
            <div className='AboutMeBanner'> About Me</div>
            <div className="content-wrapper">
              <img src={ProfileImage} alt="Profile" className='ES2' />
              <p className='AboutMe'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget quam vestibulum, congue odio vel, hendrerit nisi. Cras et sodales eros. Phasellus vel mi eros. Donec sed ipsum augue. Mauris vitae lacus nec est faucibus blandit sed vel dui. Nulla facilisi. Mauris bibendum sagittis nisi id egestas. Curabitur in aliquet mauris.              
              </p>
            </div>
          </div>
          <div className="Esports-content">
          <div className='AboutEsports'> About UNCW Esports</div>
            <div className="content-wrapper">
              <p className='AboutUs'>
                At UNCW Esports, we're a dynamic community that embraces creativity and technology, extending beyond traditional filmmaking to competitive gaming. With teams in Smash, Halo, Call of Duty, Apex Legends, Valorant, League of Legends, and Rocket League, students immerse themselves in esports, honing skills and building friendships. Our members embody innovation and collaboration, shaping the future of cinema and gaming. Welcome to UNCW Esports, where creativity knows no bounds.              
              </p>
              <img src={ES1Image} alt="ES1" className='ES1-image' />
            </div>
          </div>
         
        </main>
      </div>
    </div>
  );
}

export default EsportsPage;
