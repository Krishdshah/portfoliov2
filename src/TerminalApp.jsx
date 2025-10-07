import { useState } from 'react';
import './TerminalApp.css';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Terminal from './components/Terminal';
import Footer from './components/Footer';
import FileExplorer from './components/FileExplorer';
import ProjectModal from './components/ProjectModal';
import Toolkit from './components/Toolkit';
import ParticleBackground from './components/ParticleBackground';
import projectData from './jsons/Projects.json';

function TerminalApp({ setView, currentView }) {
  const [command, setCommand] = useState(null);
  const [currentViewPanel, setCurrentViewPanel] = useState('terminal');
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleCommand = (cmd) => {
    if (cmd === 'projects' || cmd === 'toolkit') {
      setCurrentViewPanel(cmd);
    } 
    else {
      setCurrentViewPanel('terminal');
      setCommand({ cmd, timestamp: Date.now() });
    }
  };

  const openProjectModal = (project) => {
    setSelectedProject(project);
    setModalIsOpen(true);
  };
  
  const closeProjectModal = () => setModalIsOpen(false);

  return (
    <div className="terminal-app-container">
      <ParticleBackground />
      <div className="app-grid-container">
        <div className="grid-panel header-panel">
          <Header setView={setView} currentView={currentView} />
        </div>
        <div className="grid-panel nav-panel">
          <Navigation onCommand={handleCommand} />
        </div>
        <div className="grid-panel main-panel">
          {currentViewPanel === 'terminal' && <Terminal commandToExecute={command} />}
          {/* 2. The imported projectData is now used here */}
          {currentViewPanel === 'projects' && <FileExplorer projects={projectData} onFileClick={openProjectModal} />}
          {currentViewPanel === 'toolkit' && <Toolkit />}
        </div>
        <div className="grid-panel footer-panel">
          <Footer />
        </div>
        <ProjectModal
          isOpen={modalIsOpen}
          onRequestClose={closeProjectModal}
          project={selectedProject}
        />
      </div>
    </div>
  );
}

export default TerminalApp;