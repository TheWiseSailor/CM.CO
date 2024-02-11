import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

import './Esports.css';
import EBImage from '../Esports/EsportsImages/EB.png';
import ES1Image from '../Esports/EsportsImages/ES1.png'; 
import ProfileImage from '../Esports/EsportsImages/ES2.png'; 

function EsportsPage() {
  const [state, handleSubmit] = useForm("bklsesef");

  if (state.succeeded) {
    return (
      <div className='SuccessMessageBackground'>
        <p className='SuccessMessage'>Success!<br/> I will be in touch!</p>
      </div>
    );
  }

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
          {/* CONTACT FORM */}
          <div className='ContactFormBanner'> Contact Me!</div>
          <div className="EsportsContactPage">
            
            <div className="EsportsContactSection">
              <div className="ContactText" >
              </div>
            

              <div className="EsportsContactForm">
                <form onSubmit={handleSubmit} className="Esports-form-container">
                <h2 className="ContactEsports-container-page">Contact</h2>
                  <input id="name" type="text" name="name" placeholder="Your Name" required  className='textfield'/>
                  <input id="email" type="email" name="email" placeholder="Your Email Address" required className='textfield'/>
                  <input id="phone" type="tel" name="phone" placeholder="Your Phone Number" className='textfield'/>
                  <input id="subject" type="text" name="subject" placeholder="Subject of your message" className='textfield'/>
                  <textarea id="message" name="message" placeholder="Your Message" required />
                  <button type="submit" disabled={state.submitting} className="button-container-page">
                    Submit
                  </button>
                  <ValidationError prefix="Email" field="email" errors={state.errors} />
                  <ValidationError prefix="Message" field="message" errors={state.errors} />
                </form>
                
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
    
  );
}

export default EsportsPage;
