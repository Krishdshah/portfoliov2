import './Toolkit.css';
// 1. Import the iconMap from your new library file
import { iconMap } from './iconLibrary';
// 2. Import the JSON data
import skillData from '../jsons/Toolkits.json';

function Toolkit() {
  return (
    <div className="toolkit-view">
      <h2 className="toolkit-main-title">// TECHNICAL_TOOLKIT</h2>
      <div className="categories-container">
        {skillData.map((category) => (
          <div className="skill-category" key={category.title}>
            <h3 className="category-title">{category.title}</h3>
            <div className="skills-grid">
              {category.skills.map((skill) => (
                <div className="skill-item" key={skill.name}>
                  {/* The logic remains the same and is now safe */}
                  {iconMap[skill.iconName] || null}
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