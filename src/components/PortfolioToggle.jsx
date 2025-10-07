// src/components/PortfolioToggle.jsx
import './PortfolioToggle.css';
import { FaDesktop, FaTerminal } from 'react-icons/fa';

// This component receives the current view and the function to change it
function PortfolioToggle({ currentView, setView }) {
  const isTerminalView = currentView === 'terminal';

  const toggleView = () => {
    setView(isTerminalView ? 'scrolling' : 'terminal');
  };

  return (
    <button className="portfolio-toggle-btn" onClick={toggleView} title="Toggle View">
      {isTerminalView ? <FaDesktop /> : <FaTerminal />}
    </button>
  );
}

export default PortfolioToggle;