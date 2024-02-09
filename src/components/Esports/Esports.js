import React from 'react';
import './Esports.css';
import EBImage from '../Esports/EsportsImages/EB.png'; 

function EsportsPage() {
  return (
    <div className='Esports-EB'>
      <div className="esports-page">
        <main>
          <div className="Esports-image-container">
            <img src={EBImage} alt="Esports Banner" className='Esports-E1' />
            <div className="Esports-text-overlay">
              UNCW Esports
             
            </div>
          </div>
          <div className="Esports-content">
                <p className='AboutUs'>
                  At UNCW Esports, we're not just any ordinary film school; we're a dynamic community that embraces the intersection of creativity and technology. Our focus extends beyond traditional filmmaking to encompass the vibrant world of streaming and gaming. With a diverse range of interests, we proudly field teams in a variety of competitive games, including Smash, Halo, Call of Duty, Apex Legends, Valorant, League of Legends, and Rocket League. Here, students immerse themselves in the thrilling realms of esports, honing their skills, building friendships, and cultivating a passion for digital entertainment. Whether behind the camera or on the virtual battlefield, our members embody the spirit of innovation and collaboration, shaping the future of both cinema and gaming. Welcome to UNCW Esports, where creativity knows no bounds, and the journey is as exhilarating as the destination.
                </p>
              </div>
        </main>
      </div>
    </div>
  );
}

export default EsportsPage;
