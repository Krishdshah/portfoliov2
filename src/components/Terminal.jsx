import React, { useState, useEffect } from 'react';
import './Terminal.css';

// --- CORRECTED HELPER FUNCTION ---
// This function now correctly accepts a `text` string, not a `line` object.
const renderLineWithLinks = (text) => {
  // A safety check in case a non-string is accidentally passed
  if (typeof text !== 'string') return text;

  const urlRegex = /(https?:\/\/[^\s]+|[\w.-]+@[\w.-]+)/g;
  const parts = text.split(urlRegex);

  return parts.map((part, index) => {
    if (part && part.match(urlRegex)) {
      const href = part.includes('@') ? `mailto:${part}` : part;
      return (
        <a key={index} href={href} target="_blank" rel="noopener noreferrer" className="terminal-link">
          {part}
        </a>
      );
    }
    return part;
  });
};


const fileSystem = {
  'about.txt': `
Hello! I'm Krish, a developer fascinated by the convergence of artificial intelligence and full-stack engineering.
My focus is on building intelligent, scalable applications, from crafting intuitive front-ends to architecting robust back-end systems that can support machine learning models.
  `,
  'education.txt': `
- B.Tech in CSE (AI & ML) | SRM Institute of Science and Technology, Chennai | 2024–2028
- B.Sc in Data Science | IIT Madras (Online) | 2024–Present
  `,
};

const welcomeMessageLines = [
  'Initializing KrishOS v1.0...',
  'System check complete.',
  'Welcome.',
  'Use the navigation panel or type "help" for a list of commands.',
  '-----------------------------------------------------------------',
];

function Terminal({ commandToExecute }) {
  const [history, setHistory] = useState([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    let lineIndex = 0;
    const intervalId = setInterval(() => {
      if (lineIndex < welcomeMessageLines.length) {
        setHistory(prev => [...prev, { type: 'output', text: welcomeMessageLines[lineIndex] }]);
        lineIndex++;
      } else {
        clearInterval(intervalId);
      }
    }, 400); 

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    if (commandToExecute) {
      executeCommand(commandToExecute.cmd);
    }
  }, [commandToExecute]);

  const executeCommand = (command) => {
    const [cmd, ...args] = command.toLowerCase().split(' ');
    let outputLines = [];

    switch (cmd) {
      case 'help': {
        outputLines = [
          { type: 'output', text: 'Available commands:' },
          { type: 'output', text: '  help          - Shows this list of commands' },
          { type: 'output', text: '  ls [directory]  - Lists files and directories' },
          { type: 'output', text: '  cat [file]      - Displays the content of a file' },
          { type: 'output', text: '  whoami        - Displays information about Krish Shah' },
          { type: 'output', text: '  clear         - Clears the terminal screen' },
        ];
        break;
      }
      case 'ls': {
        const path = args[0] || '';
        if (path === 'projects') {
          outputLines = [{ type: 'output', text: "Project files can be viewed in the file explorer. Click 'projects' in the navigation panel." }];
        } else if (path === '') {
          outputLines = [{ type: 'output', text: `about.txt   projects/   education.txt` }];
        } else {
          outputLines = [{ type: 'error', text: `ls: cannot access '${path}': No such directory` }];
        }
        break;
      }
      case 'toolkit': {
        outputLines = [{ type: 'output', text: "The toolkit can be viewed in the toolkit explorer. Click 'toolkit' in the navigation panel." }];
        break;
      }
      case 'cat': {
        const filePath = args[0];
        if (!filePath) {
          outputLines = [{ type: 'error', text: 'cat: missing file operand' }];
        } else {
          const pathParts = filePath.split('/');
          let fileContent;
          if (pathParts.length === 1) {
            fileContent = fileSystem[pathParts[0]];
          } else {
            outputLines = [{ type: 'error', text: `cat: ${filePath}: Is a directory` }];
          }

          if (typeof fileContent === 'string') {
            outputLines = fileContent.split('\n').map(line => ({ type: 'output', text: line }));
          } else if (fileContent === undefined) {
            outputLines = [{ type: 'error', text: `cat: ${filePath}: No such file or directory` }];
          }
        }
        break;
      }
      case 'whoami': {
        outputLines = [
            { type: 'output', text: 'NAME:         Krish D Shah' },
            { type: 'output', text: 'ROLE:         AIML Engineer' },
            { type: 'output', text: 'SPECIALTIES:  Full-Stack Development, Cybersecurity' },
            { type: 'output', text: ' ' },
            { type: 'output', text: 'A developer focused on building intelligent systems, from developing and deploying machine learning models to creating the full-stack applications that power them.' },
        ];
        break;
      }
      case 'contact': {
        outputLines = [
          { type: 'output', text: ' ' },
          { type: 'output', text: 'email    : thekrishdshahbhs@gmail.com' },
          { type: 'output', text: 'github   : https://github.com/Krishdshah' },
          { type: 'output', text: 'linkedin : https://linkedin.com/in/thekrishdshah' },
          { type: 'output', text: ' ' },
        ];
        break;
      }
      case 'clear':
      case 'cls': { // Handles both 'clear' and 'cls'
        setHistory([]);
        return;
      }
      default: {
        outputLines = [{ type: 'error', text: `command not found: ${command}` }];
      }
    }
    setHistory(prev => [...prev, { type: 'command', text: command }, ...outputLines]);
  };
  
  const handleInputChange = (e) => setInput(e.target.value);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (input.trim() === '') return;
    executeCommand(input);
    setInput('');
  };

  return (
    <div className="terminal-window" onClick={(e) => e.currentTarget.querySelector('.terminal-input').focus()}>
      <div className="terminal-output">
        {/* --- CORRECTED RENDER LOGIC --- */}
        {/* We now pass `line.text` (a string) to the helper function */}
        {history.map((line, index) => (
          <div key={index} className={`line ${line.type}`}>
            {line.type === 'command' 
              ? line.text 
              : renderLineWithLinks(line.text)
            }
          </div>
        ))}
      </div>
      <form onSubmit={handleFormSubmit} className="terminal-input-form">
        <span className="prompt">C:\Users\Krish&gt;</span>
        <input type="text" value={input} onChange={handleInputChange} className="terminal-input" autoFocus />
      </form>
    </div>
  );
}

export default Terminal;