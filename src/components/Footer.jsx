// src/components/Footer.jsx
import './Footer.css';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-container">
      <div className="social-links">
        <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer">
          <FaGithub size={28} />
        </a>
        <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={28} />
        </a>
        <a href="https://twitter.com/your-handle" target="_blank" rel="noopener noreferrer">
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