// src/components/Projects.jsx
import { useState } from 'react';
import Tilt from 'react-vanilla-tilt'; // 1. Make sure Tilt is imported
import './Projects.css';
import ProjectModal from './ProjectModal';
import projectData from '../jsons/projects.json';


function Projects() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  // 2. Define the tilt options
  const tiltOptions = {
    max: 15,
    speed: 400,
    glare: true,
    "max-glare": 0.4,
  };

  return (
    <div className="projects-container-inner">
      <h2 className="projects-title">// MY_WORK</h2>
      <div className="projects-grid">
        {projectData.map((project) => (
          <div key={project.id} className="tilt-wrapper">
            <Tilt
              options={tiltOptions}
              onClick={() => openModal(project)}
            >
              <div className="project-rect">
                <div className="project-title-card">
                  <h3>{project.title}</h3>
                </div>
              </div>
            </Tilt>
          </div>
        ))}
      </div>
      <ProjectModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        project={selectedProject}
      />
    </div>
  );
}

export default Projects;