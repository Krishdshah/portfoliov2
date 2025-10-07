import './Toolkit.css';
import { FaJsSquare, FaReact, FaNodeJs, FaGitAlt, FaGithub, FaPython, FaJava, FaRobot, FaBrain } from 'react-icons/fa';
import { SiVercel, SiRender, SiFlutter, SiDart, SiMysql, SiExpress } from 'react-icons/si';
import { BiLogoVisualStudio } from "react-icons/bi";
import skillData from '../jsons/Toolkits.json';

const iconMap = {
  FaJsSquare: <FaJsSquare size={40} />,
  FaPython: <FaPython size={40} />,
  FaJava: <FaJava size={40} />,
  SiDart: <SiDart size={40} />,
  FaBrain: <FaBrain size={40} />,
  FaReact: <FaReact size={40} />,
  FaNodeJs: <FaNodeJs size={40} />,
  SiExpress: <SiExpress size={40} />,
  SiFlutter: <SiFlutter size={40} />,
  FaGitAlt: <FaGitAlt size={40} />,
  FaGithub: <FaGithub size={40} />,
  BiLogoVisualStudio: <BiLogoVisualStudio size={40} />,
  SiVercel: <SiVercel size={40} />,
  SiRender: <SiRender size={40} />,
  SiMysql: <SiMysql size={40} />,
  FaRobot: <FaRobot size={40} />,
};

function Toolkit() {
  return (
    <div className="toolkit-view">
      <h2 className="toolkit-main-title">// TECHNICAL_TOOLKIT</h2>
      <div className="categories-container">
        {/* CORRECTED: Use skillData from the JSON import */}
        {skillData.map((category) => (
          <div className="skill-category" key={category.title}>
            <h3 className="category-title">{category.title}</h3>
            <div className="skills-grid">
              {category.skills.map((skill) => (
                <div className="skill-item" key={skill.name}>
                  {iconMap[skill.iconName]}
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Toolkit;