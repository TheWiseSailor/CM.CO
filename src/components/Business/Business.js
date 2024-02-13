import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import './Business.css';
import Business1Image from '../Business/BusinessImages/Business1.png';
import Business2Image from '../Business/BusinessImages/Business2.png';

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
          <h1>Cmoore Realestate</h1>
          <p className='BusinessP1'>Realestate Made Simple</p>
        </div>
      </header>

      <h2 className='BH2'>About Me</h2>

      <section className="about-me-container">
        <img src={Business2Image} alt="carter" className="Business2Image" />
        <div className="text-content">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod tellus eget lectus vehicula, ut faucibus orci blandit. Quisque nec urna eu risus laoreet bibendum eget non purus. Sed rhoncus, lacus quis imperdiet tristique, velit elit consectetur nisi, sit amet placerat justo metus a lorem. Donec in lobortis tortor. Integer efficitur suscipit quam sit amet volutpat.
          </p>
        </div>
      </section>

      <div className="contact-container-form-page">
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
