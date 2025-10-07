// src/components/Education.jsx
import './Education.css';
import { FaUniversity, FaLaptopCode, FaGraduationCap, FaBook } from 'react-icons/fa';

const educationData = [
  {
    year: '2024 – 2028',
    title: 'B.Tech in CSE (AI & ML)',
    institution: 'SRM Institute of Science and Technology, Chennai',
    grade: 'GPA: 10.0',
    icon: <FaUniversity />,
  },
  {
    year: '2024 – Present',
    title: 'B.Sc in Data Science',
    institution: 'IIT Madras (Online)',
    grade: 'Current GPA: 7.4',
    icon: <FaLaptopCode />,
  },
  {
    year: '2022',
    title: 'Class 12 (PCM + CS)',
    institution: 'Birla High School',
    grade: 'Percentage: 94.4%',
    icon: <FaGraduationCap />,
  },
  {
    year: '2020',
    title: 'Class 10',
    institution: 'Birla High School',
    grade: 'Percentage: 95.2%',
    icon: <FaBook />,
  },
];

function Education() {
  return (
    <div className="education-container-inner">
      <h2 className="education-title">// EDUCATION</h2>
      <div className="timeline">
        {educationData.map((item, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-icon">{item.icon}</div>
            <div className="timeline-content">
              <span className="timeline-year">{item.year}</span>
              <h3 className="timeline-title">{item.title}</h3>
              <p className="timeline-institution">{item.institution}</p>
              <p className="timeline-grade">{item.grade}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Education;