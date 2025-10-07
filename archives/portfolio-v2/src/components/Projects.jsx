// src/components/Projects.jsx
import { useState } from 'react';
import Tilt from 'react-vanilla-tilt'; // 1. Make sure Tilt is imported
import './Projects.css';
import ProjectModal from './ProjectModal';

const projectData = [
  {
    id: 1,
    title: 'Sign Sync',
    description: '"SignSync" is an ML-powered system that converts sign language gestures into text and speech, promoting communication for the deaf and speech-impaired. It enhances accessibility in education, healthcare, customer support, and public services.',
    liveUrl: '#', // Replace with your live project link
    codeUrl: '#', // Replace with your GitHub link
  },
  {
    id: 2,
    title: 'Portfolio Website',
    description: 'A fully responsive and visually engaging portfolio website built to showcase my projects, skills, and experiences. Designed with a clean UI and dark theme, it reflects my personal brand and enables easy navigation across sections.',
    liveUrl: '#',
    codeUrl: '#',
  },
  {
    id: 3,
    title: 'Sudoku Checker',
    description: 'This is a Python-based Sudoku Checker that verifies whether a given Sudoku puzzle is correctly solved. It checks if each row, column, and 3x3 subgrid contains all digits from 1 to 9 without any repetition.',
    liveUrl: '#',
    codeUrl: '#',
  },
  {
    id: 4,
    title: 'Airline Ticket Booking Software',
    description: 'This project is a Python-based application that enables users to search for and book airline tickets effortlessly. With a user-friendly interface built using Tkinter, the backend is powered by MySQL, ensuring efficient data storage and retrieval.',
    liveUrl: '#',
    codeUrl: '#',
  },
];

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
          <div className="tilt-wrapper">
            <Tilt
              options={tiltOptions}
              onClick={() => openModal(project)}
              style={{}}
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