// src/components/Navbar.jsx
import { useState } from 'react';
import './Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <a href="#" className="nav-logo">KS_</a>
      <div className={`nav-links ${isOpen ? 'active' : ''}`}>
        <a href="#about">About</a>
        <a href="#education">Education</a>
        <a href="#projects">Projects</a>
        <a href="#toolkit">Toolkit</a>
        <a href="#contact">Contact</a>
      </div>
      <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
}

export default Navbar;