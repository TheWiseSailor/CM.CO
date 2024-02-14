import React, { useState, useEffect } from 'react';

const HomePage = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [delta, setDelta] = useState(300 - Math.random() * 100);

  const toRotate = ['Real Estate Agent', 'Cod Captain', ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => tick(), delta);
    return () => clearInterval(ticker);
  }, [text]);

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

  return (
    <section className="about" id="home">
      <div className="animate__animated animate__fadeIn">
        <span className="tagline">CM.CO</span>
        <h1>
          Hello! I'm Carter Moore <span className="wrap">{text}</span>
        </h1>
        <p>Great outcomes demand time and patience.</p>
        <button onClick={() => console.log('connect')}>
          Connect!
        </button>
      </div>
      <div className="animate__animated animate__zoomIn">
        <img
          className="headerImg"
          src="../HomePage/HomePageImages/Sample.jpg"
          alt="headerImg"
        />
      </div>
    </section>
  );
};

export default HomePage;
