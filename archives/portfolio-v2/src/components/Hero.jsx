// src/components/Hero.jsx
import { useState, useEffect } from 'react';
import RevolvingIcons from './RevolvingIcons'; 
import './Hero.css';

function Hero() {
  const fullName = 'Krish Shah';
  const [typedName, setTypedName] = useState('');

  useEffect(() => {
    if (typedName.length < fullName.length) {
      const timeoutId = setTimeout(() => {
        setTypedName(fullName.slice(0, typedName.length + 1));
      }, 150); 
      return () => clearTimeout(timeoutId);
    }
  }, [typedName, fullName]);

  return (
    <div className="hero-container">
      <div className="hero-name-wrapper"> {/* NEW Wrapper */}
        <RevolvingIcons /> {/* Revolving icons inside the wrapper */}
        <h1 className="hero-title">
          {typedName}
          <span className="cursor">_</span>
        </h1>
      </div>
      <p className="hero-subtitle">
        Cybersecurity Enthusiast & Full Stack Developer
      </p>
      <a href="#projects" className="cta-button">View My Work</a>
    </div>
  );
}

export default Hero;