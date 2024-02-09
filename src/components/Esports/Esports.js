import React from 'react';
import './Esports.css';

function EsportsPage() {
  return (
    <div className='EB'>
    <div className="esports-page">
      <header>
        <h1 className='EH1'>Esports</h1>
      </header>
      <main>
        <section className="topic">
          <img src="placeholder1.jpg" alt="Placeholder 1" />
          <p>First</p>
        </section>
        <section className="topic">
          <img src="placeholder2.jpg" alt="Placeholder 2" />
          <p>Second </p>
        </section>
        <section className="topic">
          <img src="placeholder3.jpg" alt="Placeholder 3" />
          <p>Third</p>
        </section>
      </main>
      </div>
    </div>
  );
}

export default EsportsPage;
