// src/components/SystemStats.jsx
import { useState, useEffect } from 'react';
import './SystemStats.css';

function SystemStats() {
  const [stats, setStats] = useState({
    cpu: 0,
    mem: 0,
    net: 0,
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      setStats({
        cpu: (Math.random() * 20 + 5).toFixed(1),
        mem: (Math.random() * 30 + 40).toFixed(1),
        net: (Math.random() * 15 + 2).toFixed(1),
      });
    }, 2000); // Update every 2 seconds

    return () => clearInterval(intervalId); // Cleanup on component unmount
  }, []);

  return (
    <div className="stats-container">
      <div className="stat-item">CPU LOAD: {stats.cpu}%</div>
      <div className="stat-item">MEM USAGE: {stats.mem}%</div>
      <div className="stat-item">NET SPEED: {stats.net} MB/s</div>
    </div>
  );
}

export default SystemStats;