import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import './Contact.css';

function ContactForm() {
  const [state, handleSubmit] = useForm("bklsesef");


  if (state.succeeded) {
    return <div className='SuccessMessageBackground'><p className=' SuccessMessage'>Success!<br/> I will be in touch!</p></div>;
  }

  return (
    <div className="contact-container-form-page">
      <div className="contact-form-container-page" data-aos="fade-down"
              data-aos-duration="3000">
        <h2 className="ContactHomePageHeader-container-page">Contact</h2>
        <form onSubmit={handleSubmit} className="form-container">
   
          <input
            id="name"
            type="text"
            name="name"
            placeholder="Your Name"
            required
          />

          <input
            id="email"
            type="email"
            name="email"
            placeholder="Your Email Address"
            required
          />
       
          <input
            id="phone"
            type="tel"
            name="phone"
            placeholder="Your Phone Number"
          />
      
          <input
            id="subject"
            type="text"
            name="subject"
            placeholder="Subject of your message"
          />
     
          <textarea
            id="message"
            name="message"
            placeholder="Your Message"
            required
          />
          <button type="submit" disabled={state.submitting} className="button-container-page">
            Submit
          </button>
     
          <ValidationError
            prefix="Email"
            field="email"
            errors={state.errors}
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
        </form>
      </div>
    </div>
  );
}

function App() {
  return (
    <ContactForm />
  );
}

export default App;
