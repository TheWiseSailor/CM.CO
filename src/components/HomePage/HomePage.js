import React, { useState, useEffect,  } from 'react';
import { Link } from 'react-router-dom';
import SampleImage from '../HomePage/HomePageImages/Business2.png';
import AOSInitializer from "../AOS/AOSInitializer";
import "./HomePage.css"

const HomePage = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [delta, setDelta] = useState(500 - Math.random() * 500);

  const toRotate = ['Real Estate Agent', 'Cod Captain', ];
  const period = 5000;

  useEffect(() => {
    let ticker = setInterval(() => tick(), delta);
    return () => clearInterval(ticker);
  }, [text, delta]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };

    const handleConnectClick = () => {
      console.log('connect');
 
    };
  return (
    <section className="about" id="home">
      <div className="content">
      <AOSInitializer/>
        <div>
 
          <h1 className='Intro1'data-aos="fade-down" data-aos-duration="3000">
            Hello! I'm Carter Moore,  <span className="wrap">{text}</span>
          </h1>
          <AOSInitializer/>
          <p className='Intro2'data-aos="fade-down" data-aos-duration="3000">Great outcomes demand time and patience.</p>
          <Link to="/Business">
          <AOSInitializer/>

      <button onClick={handleConnectClick} 
      className='ConnectBTN'data-aos="fade-up" data-aos-duration="3000">
        Connect!
      </button>
      
    </Link>
        </div>
      </div>
      <div>
        <img
          className="headerImg1"
          src={SampleImage}
          alt="HomePageImg1"
          data-aos="fade-up" data-aos-duration="3000"
        />
      </div>
    </section>
  );
};

export default HomePage;
