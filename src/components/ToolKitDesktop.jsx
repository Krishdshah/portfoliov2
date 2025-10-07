// src/components/Toolkit.jsx
import './ToolkitDesktop.css';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaSass, FaGitAlt, FaGithub, FaPython, FaJava } from 'react-icons/fa';
import { SiVercel, SiRender, SiFlutter, SiDart, SiMysql} from 'react-icons/si';
import { BiLogoVisualStudio } from "react-icons/bi";
import { SiAndroidstudio } from "react-icons/si";
//import { SiPandas, SiNumpy, SiScikitlearn, SiTensorflow, SiXgboost} from 'react-icons/si';

const skillCategories = [
  {
    title: 'Programming Languages',
    skills: [
      { name: 'HTML5', icon: <FaHtml5 size={45} /> },
      { name: 'CSS3', icon: <FaCss3Alt size={45} /> },
      { name: 'JavaScript', icon: <FaJsSquare size={45} /> },
      { name: 'Python', icon: <FaPython size={45} /> },
      { name: 'Java', icon: <FaJava size={45} /> },
      { name: 'Dart', icon: <SiDart size={45} /> },
    ],
  },
  {
    title: 'Frameworks & Libraries',
    skills: [
      { name: 'React', icon: <FaReact size={45} /> },
      { name: 'Node.js', icon: <FaNodeJs size={45} /> },
      { name: 'Flutter', icon: <SiFlutter size={45} /> },
    ],
  },
  {
    title: 'Tools & Platforms',
    skills: [
      { name: 'Git', icon: <FaGitAlt size={45} /> },
      { name: 'GitHub', icon: <FaGithub size={45} /> },
      { name: 'Vercel', icon: <SiVercel size={45} /> },
      { name: 'Render', icon: <SiRender size={45} /> },
      { name: 'MySQL', icon: <SiMysql size={45} /> },
      { name: 'VS Code', icon: <BiLogoVisualStudio size={45} /> },
      { name: 'Android Studio', icon: <SiAndroidstudio size={45} /> },
    ],
  },
  /**{
    title: 'AI & Machine Learning',
    skills: [
      { name: 'NumPy', icon: <SiNumpy size={45} /> },
      { name: 'Pandas', icon: <SiPandas size={45} /> },
      { name: 'Scikit-learn', icon: <SiScikitlearn size={45} /> },
      { name: 'TensorFlow', icon: <SiTensorflow size={45} /> },
      { name: 'XGBoost', icon: <SiXgboost size={45} /> },
    ],
  },*/
  /**{
    title: 'AI Development Tools',
    skills: [
      { name: 'ChatGPT', icon: <SiChatgpt size={45} /> },
      { name: 'Google Gemini', icon: <SiGooglegemini size={45} /> },
      { name: 'Claude', icon: <SiClaude size={45} /> },
      { name: 'Cursor', icon: <SiCursor size={45} /> },
    ],
  },*/
];

function Toolkit() {
  return (
    <section className="toolkit-container">
      <h2 className="toolkit-title">// MY_TOOLKIT</h2>
      <div className="skills-list">
        {skillCategories.map((category) => (
          <div className="category-row" key={category.title}>
            <h3>{category.title}</h3>
            <div className="icons-container">
              {category.skills.map((skill) => (
                <div className="skill-icon" key={skill.name} title={skill.name}>
                  {skill.icon}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Toolkit;