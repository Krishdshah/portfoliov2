import { useState, useEffect } from 'react';
import './Header.css';
import { FaDesktop, FaTerminal } from 'react-icons/fa';

function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timerId);
  }, []);

  return <div className="clock">{time.toLocaleTimeString()}</div>;
}

function Header({ setView, currentView }) {
  const isTerminalView = currentView === 'terminal';
  const toggleView = () => {
    setView(isTerminalView ? 'scrolling' : 'terminal');
  };

  return (
    <header className="header-container">
      <div className="logo">KS_OS</div>
      <div className="system-info">
        <span>STATUS: ONLINE</span>
        <span>LOCATION: CHENNAI</span>
      </div>
      <div className="header-right">
        <Clock />
        <button className="view-toggle-btn" onClick={toggleView} title="Toggle View">
          {isTerminalView ? <FaDesktop /> : <FaTerminal />}
        </button>
      </div>
    </header>
  );
}

export default Header;