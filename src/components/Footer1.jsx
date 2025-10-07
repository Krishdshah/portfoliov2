// src/components/Footer.jsx
import './Footer1.css';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-container">
      <div className="social-links">
        <a href="https://github.com/Krishdshah" target="_blank" rel="noopener noreferrer">
          <FaGithub size={28} />
        </a>
        <a href="https://linkedin.com/in/thekrishdshah" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={28} />
        </a>
        <a href="https://twitter.com/ikrishshah" target="_blank" rel="noopener noreferrer">
          <FaTwitter size={28} />
        </a>
      </div>
      <p className="copyright-text">
        © {currentYear} Krish Shah. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;