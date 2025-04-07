import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-content">
        <h1>Will you marry me?</h1>
        <button className="proposal-btn" onClick={() => alert('Yes!')}>Yes, I will!</button>
      </div>
    </div>
  );
};

export default Hero;
