import React, { useState, useEffect,  } from 'react';
import { Link } from 'react-router-dom';
import SampleImage from '../HomePage/HomePageImages/Business2.png';
import "./HomePage.css"

const HomePage = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [delta, setDelta] = useState(100 - Math.random() * 100);

  const toRotate = [',Real Estate Agent', 'Cod Captain', ];
  const period = 1000;

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
        <div className="animate__animated animate__fadeIn">
          <h1 className='Intro1'>
            Hello! I'm Carter Moore <span className="wrap">{text}</span>
          </h1>
          <p className='Intro2'>Great outcomes demand time and patience.</p>
          <Link to="/Business">
      <button onClick={handleConnectClick} className='ConnectBTN'>
        Connect!
      </button>
    </Link>
        </div>
      </div>
      <div className="animate__animated animate__zoomIn">
        <img
          className="headerImg1"
          src={SampleImage}
          alt="HomePageImg1"
        />
      </div>
    </section>
  );
};

export default HomePage;
