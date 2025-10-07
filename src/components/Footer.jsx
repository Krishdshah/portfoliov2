// src/components/Footer.jsx
import './Footer.css';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import SystemStats from './SystemStats'; // 1. Import the new component

const keyboardLayout = "QWERTYUIOPASDFGHJKLZXCVBNM";

function Footer() {
  return (
    <footer className="footer-grid-container">
      <div className="social-links-footer">
        <a href="https://github.com/Krishdshah" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
        <a href="https://linkedin.com/in/thekrishdshah" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
        <a href="https://twitter.com/ikrishshah" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
      </div>
      <div className="virtual-keyboard">
        {keyboardLayout.split('').map(char => <div key={char}>{char}</div>)}
      </div>
      {/* 2. Replace the old div with the new component */}
      <SystemStats />
    </footer>
  );
}

export default Footer;