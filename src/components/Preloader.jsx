// src/components/Preloader.jsx
import { useState, useEffect } from 'react';
import './Preloader.css';

const loadingSteps = [
  'Booting KrishOS...',
  'Loading kernel modules...',
  'Initializing UI components...',
  'Connecting to network...',
  'Finalizing...',
];

function Preloader({ onLoaded }) {
  const [currentStep, setCurrentStep] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false); // New state to control completion

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setIsComplete(true); // Set completion state instead of calling onLoaded directly
          return 100;
        }
        return prev + 2;
      });
    }, 60);

    const stepInterval = setInterval(() => {
        setCurrentStep(prev => (prev < loadingSteps.length - 1 ? prev + 1 : prev));
    }, 600);

    return () => {
      clearInterval(stepInterval);
      clearInterval(progressInterval);
    };
  }, []);

  // New effect to call onLoaded AFTER rendering is complete
  useEffect(() => {
    if (isComplete) {
      onLoaded();
    }
  }, [isComplete, onLoaded]);
  
  return (
    <div className="preloader-container">
      <div className="preloader-content">
        <div className="preloader-logo">KS_OS</div>
        <p className="loading-text">{loadingSteps[currentStep]}</p>
        <div className="progress-bar-container">
          <div className="progress-bar" style={{ width: `${progress}%` }}></div>
        </div>
      </div>
    </div>
  );
}

export default Preloader;