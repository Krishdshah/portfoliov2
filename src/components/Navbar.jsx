import { useState } from 'react';
import './Navbar.css';
import { FaDesktop, FaTerminal } from 'react-icons/fa';

function Navbar({ setView, currentView }) {
  const [isOpen, setIsOpen] = useState(false);
  const isTerminalView = currentView === 'terminal';
  const toggleView = () => {
    setView(isTerminalView ? 'scrolling' : 'terminal');
  };

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
      <div className="navbar-right">
        <button className="view-toggle-btn" onClick={toggleView} title="Toggle View">
          {isTerminalView ? <FaDesktop /> : <FaTerminal />}
        </button>
        <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;