// src/components/Navigation.jsx
import './Navigation.css';

const navItems = {
  'whoami': 'whoami',
  'about.txt': 'cat about.txt',
  'education.txt': 'cat education.txt',
  'projects': 'projects',
  'toolkit': 'toolkit', 
  'contact': 'contact',
};

function Navigation({ onCommand }) {
  return (
    <nav className="nav-container">
      <h3 className="nav-title">&gt; DIRECTORY</h3>
      <ul className="nav-list">
        {Object.entries(navItems).map(([displayName, command]) => (
          <li
            key={displayName}
            className="nav-item"
            onClick={() => onCommand(command)}
          >
            {displayName}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;