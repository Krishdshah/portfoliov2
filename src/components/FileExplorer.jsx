// src/components/FileExplorer.jsx
import './FileExplorer.css';
import { FaFolder } from 'react-icons/fa';

// This component receives the project data and a function to open the project
function FileExplorer({ projects, onFileClick }) {
  return (
    <div className="file-explorer">
      {projects.map(project => (
        <div 
          key={project.id} 
          className="folder-item"
          // We'll pass the full project back to the parent to be displayed
          onClick={() => onFileClick(project)} 
        >
          <FaFolder className="folder-icon" />
          <span className="folder-name">{project.title.replace(/ /g, '_')}.proj</span>
        </div>
      ))}
    </div>
  );
}

export default FileExplorer;