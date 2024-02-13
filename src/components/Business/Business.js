
import React from 'react';
import './Business.css';
import Business1Image from '../Business/BusinessImages/Business1.png';

function App() {
  return (
    <div className="App">
      <header className="header">
        
        <img src={Business1Image} alt="Greeting" className="greeting-image" />
        
        <div className="header-content">
          <h1>Cmoore Realestate</h1>
          <p className='BusinessP1'>Realestate Made Simple</p>
        </div>
      </header>

      <section className="about-section">
        <h2>About Us</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod tellus eget lectus vehicula, ut faucibus orci blandit. Quisque nec urna eu risus laoreet bibendum eget non purus. Sed rhoncus, lacus quis imperdiet tristique, velit elit consectetur nisi, sit amet placerat justo metus a lorem. Donec in lobortis tortor. Integer efficitur suscipit quam sit amet volutpat.</p>
      </section>

      <section className="contact-section">
        <h2>Contact Us</h2>
        <form>
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <textarea placeholder="Your Message"></textarea>
          <button type="submit" className="btn">Send Message</button>
        </form>
      </section>


    </div>
  );
}

export default App;
