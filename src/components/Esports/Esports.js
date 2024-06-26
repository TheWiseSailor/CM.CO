import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import './Esports.css';
import EBImage from '../Esports/EsportsImages/EB.png';
import ES1Image from '../Esports/EsportsImages/ES1.png';
import ProfileImage from '../Esports/EsportsImages/ES2.png';
import AOSInitializer from "../AOS/AOSInitializer";
import TwitchIcon from './EsportsImages/SocialImages/twitch.png';

import mailIcon from './EsportsImages/SocialImages/mail.png';
import phoneIcon from './EsportsImages/SocialImages/phone.png';


function EsportsPage() {
  const formKey = process.env.REACT_APP_FORMSPREE_API_KEY; // Updated API key
  const [state, handleSubmit] = useForm(formKey);
  const handleCall = () => {
    window.location.href = 'tel:+118284343699'; 
  };
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
            <img src={EBImage} alt="Esports Banner" className='Esports-E1' data-aos="fade-down" data-aos-duration="3000" />
            <AOSInitializer/>
            <div className="Esports-text-overlay">
              UNCW Esports
            </div>
          </div>

          <div className="AboutMe-content">
          <AOSInitializer/>
            <div className='AboutMeBanner' data-aos="fade-down" data-aos-duration="3000"> About Me</div>
            <div className="content-wrapper">
            <AOSInitializer/>
              <img src={ProfileImage} alt="Profile" className='ES2' data-aos="fade-up" data-aos-duration="3000" />
              <AOSInitializer/>
              <p className='AboutMe'  data-aos="fade-down" data-aos-duration="3000">
              I'm Carter, the captain of the UNC Wilmington Cod team. As a leader among my peers, I thrive on guiding others to success both on and off the waters. Just like navigating the seas, I'm here to steer you towards your goals, whether it's finding the perfect fishing spot or achieving academic excellence. Let's set sail together and chart a course to victory!              </p>
            </div>
          </div>
          <div className="Esports-content">
          <AOSInitializer/>
            <div className='AboutEsports'data-aos="fade-down" data-aos-duration="3000"> About UNCW Esports</div>
            <div className="content-wrapper">
            <AOSInitializer/>
              <p className='AboutUs'data-aos="fade-up" data-aos-duration="3000">
                At UNCW Esports, we're a dynamic community that embraces creativity and technology, extending beyond traditional filmmaking to competitive gaming. With teams in Smash, Halo, Call of Duty, Apex Legends, Valorant, League of Legends, and Rocket League, students immerse themselves in esports, honing skills and building friendships. Our members embody innovation and collaboration, shaping the future of cinema and gaming. Welcome to UNCW Esports, where creativity knows no bounds.              
              </p>
              <AOSInitializer/>
              <img src={ES1Image} alt="ES1" className='ES1-image' data-aos="fade-down" data-aos-duration="3000"/>
            </div>
          </div>
          <div className='ContactFormBanner'data-aos="fade-down" data-aos-duration="3000"> My Goals</div>
<div className='Goalz'>
I aspire to pursue a career in the esports industry, a field that deeply resonates with my passion and interests.
<p> My goal is to ascend the ranks and assume the role of a project manager within a prominent league or organization. </p>
<p>Through dedication and perseverance, I aim to become an integral part of a community comprised of individuals who share my fervor and commitment to advancing the realm of esports.</p>

</div>
          <div className='ContactFormBanner'data-aos="fade-down" data-aos-duration="3000"> My Projects</div>
          <div className="DisplayLinksSection "data-aos="fade-down" data-aos-duration="3000">
{/* NOTE THIS WILL BE MADE INTO ITS OWN PAGE. DUE TO BEING NOTIFIED OF CHANGES AN HOUR BEFORE THE PROJECT IS DUE (he wants to use mywebsite instead of making one off of wix) */}
  <ul>
    <li><a href="https://uncw4-my.sharepoint.com/:p:/g/personal/ccm4989_uncw_edu/EbIHi2fb5hhGpf3VcFTKw5cBYvOlid9tTwS_h-Clz0autQ?e=j5NyIc">Optic Gaming</a></li>
    <li><a href="https://uncw4-my.sharepoint.com/:p:/g/personal/ccm4989_uncw_edu/EbPO5H5khO9KjRbHUJM-tTsBT9aZntiSfvwiXFd_c2Itzw?e=a9Y5TD">Scump</a></li>
    <li><a href="https://uncw4-my.sharepoint.com/:p:/g/personal/ccm4989_uncw_edu/EXgIBc1BPpdJpsVwsrPyLLYBDvdI_xb12_QoBrQhL3A9Rw?e=XwHE2T">Call Of Duty</a></li>
    {/* Add more links as needed */}
  </ul>
</div>
          {/* CONTACT FORM */}
          <AOSInitializer/>
          <div className='ContactFormBanner'data-aos="fade-down" data-aos-duration="3000"> Contact Me!</div>
          <div className="social-container">
          <AOSInitializer/>

            <div className="SocialContactContainer"data-aos="fade-down" data-aos-duration="3000">
            <AOSInitializer/>

              <div className='SocialP'> <p className='Socialp2'data-aos="fade-down" data-aos-duration="3000">If you would like to get in contact with me for any of the following Esports programs, whether it be through this simple Contact form, or just by the social links below. I look forward to speaking to you!
              </p>
              <AOSInitializer/>

              <div className="social-icons"data-aos="fade-up" data-aos-duration="3000">
                <a href="mailto:cmooregaming9@gmail.com"><img src={mailIcon} alt="Email" /></a>
                <a href="https://www.twitch.tv/cmooreplaz"><img src={TwitchIcon} alt="Icon" /></a>

                <a href="tel:+18284343699" onClick={handleCall}><img src={phoneIcon} alt="Phone" /></a>
              </div>
              </div>
            </div>
          </div>
          
          <div className="EsportsContactPage">
          <AOSInitializer/>

            <div className="EsportsContactSection"data-aos="fade-up" data-aos-duration="3000">
              <div className="ContactText" ></div>
              <div className="EsportsContactForm">
                <form onSubmit={handleSubmit} className="Esports-form-container">
                  <h2 className="ContactEsports-container-page">Contact</h2>
                  <input id="name" type="text" name="name" placeholder="Your Name" required className='textfield'/>
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
