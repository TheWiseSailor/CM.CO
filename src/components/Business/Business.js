import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import './Business.css';
import Business1Image from '../Business/BusinessImages/Business1.png';
import Business2Image from '../Business/BusinessImages/Business2.png';
import AOSInitializer from "../AOS/AOSInitializer";

function Business() {
  const formKey = process.env.REACT_APP_FORMSPREE_API_KEY; 
  const [state, handleSubmit] = useForm(formKey);

  if (state.succeeded) {
    return <div className='SuccessMessageBackground'><p className=' SuccessMessage'>Success!<br/> I will be in touch!</p></div>;
  }

  return (
    <div className="App">
      <header className="header">
        <img src={Business1Image} alt="Greeting" className="greeting-image" />
        <div className="header-content">

        <AOSInitializer/>
          <h1 data-aos="fade-down" data-aos-duration="3000" >Cmoore Real Estate</h1>
          <p className='BusinessP1' data-aos="fade-up" data-aos-duration="3000">Real Estate Made Simple</p>
        </div>
      </header>

   
      <h2 className='BH2'>About Me</h2>
      <AOSInitializer/>
      <section className="about-me-container"data-aos="fade-down" data-aos-duration="3000" >
        <img src={Business2Image} alt="carter" className="Business2Image" />
        <AOSInitializer/>
        <div className="text-content"data-aos="fade-up" data-aos-duration="3000" >
          <p className='ContactInf1'>
            Hello, I'm Carter, your trusted real estate agent specializing in finding dream homes near the Wilmington area. Whether you're searching for a cozy bungalow, a spacious family home, or a luxurious estate, I'm here to guide you every step of the way. Let's turn your homeownership dreams into reality!
          </p>
        </div>
      </section>

{/* add more to this later */}
      {/* add a section here to where I can add a 3d house */}
      <h2 className='BH3'>Contacts</h2>
      <div className="contact-container-form-page">
      <AOSInitializer/>
        <div className="left-side-content"data-aos="fade-up" data-aos-duration="3000">
          <p className='ContactInf2'>If you would like to fill out any inqueries about real estate or housing oppertunities, don't hesitate to reach out!</p>
        </div>
        <div className="contact-form-container-page" data-aos="fade-down" data-aos-duration="3000">
          <h2 className="ContactHomePageHeader-container-page">Contact</h2>
          <form onSubmit={handleSubmit} className="form-container">
            <input id="name" type="text" name="name" placeholder="Your Name" required />
            <input id="email" type="email" name="email" placeholder="Your Email Address" required />
            <input id="phone" type="tel" name="phone" placeholder="Your Phone Number" />
            <input id="subject" type="text" name="subject" placeholder="Subject of your message" />
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
  );
}

export default Business;
