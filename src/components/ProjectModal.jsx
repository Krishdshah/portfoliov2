// src/components/ProjectModal.jsx
import Modal from 'react-modal';
import './ProjectModal.css';
import { FaTimes, FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

// This line is important for accessibility
Modal.setAppElement('#root');

function ProjectModal({ isOpen, onRequestClose, project }) {
  if (!project) return null;

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="project-modal"
      overlayClassName="project-modal-overlay"
      closeTimeoutMS={300}
    >
      <button onClick={onRequestClose} className="close-modal-btn">
        <FaTimes />
      </button>
      <div className="modal-content">
        <h2 className="modal-title">{project.title}</h2>
        <p className="modal-description">{project.description}</p>
        <div className="modal-links">
          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
            <FaExternalLinkAlt /> Live Demo
          </a>
          <a href={project.codeUrl} target="_blank" rel="noopener noreferrer">
            <FaGithub /> Source Code
          </a>
        </div>
      </div>
    </Modal>
  );
}

export default ProjectModal;