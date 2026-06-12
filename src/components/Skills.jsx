import { useEffect, useRef, useState } from 'react';
import Magnetic from './Magnetic';
import './Skills.css';
import adobe_xd from '../assets/adobe_xd.png';
import figma_icon from '../assets/figma.png';
import react_icon from '../assets/react.png';
import tailwind_icon from '../assets/tailwind.png';
import spring_icon from '../assets/spring.png';
import java_icon from '../assets/java.png';
import mysql_icon from '../assets/mysql.png';
import wireframe_icon from '../assets/wireframe.png';
import prototype_icon from '../assets/prototype.png';
import research_icon from '../assets/user_research.png';
import design_sys_icon from '../assets/design_system.png';
import responsive_icon from '../assets/responsive_ui.png';
import html_icon from '../assets/HTML.png';
import css_icon from '../assets/CSS.png';
import js_icon from '../assets/Javascript.png';
import bootstrap_icon from '../assets/bootstrap.png';
import gsap_icon from '../assets/gspa.png';
import hibernate_icon from '../assets/hibernate.png';
import servlet_icon from '../assets/servlet.png';
import jsp_icon from '../assets/JSP.png';
import rest_icon from '../assets/rest_API.png';
import db_design_icon from '../assets/Database_design.png';
import core_java_icon from '../assets/core_java.png';
import sql_icon from '../assets/sql_query.png';
import sql from '../assets/sql.png';

const skillCategories = [
  {
    id: 'design',
    title: 'UI/UX Design',
    icon: <img src={figma_icon} alt="Design" className="skills__category-img" />,
    color: '#EC4899',
    skills: [
      { name: 'Figma', level: 100, icon: <img src={figma_icon} alt="Figma" className="skills__tech-logo" /> },
      { name: 'Adobe XD', level: 85, icon: <img src={adobe_xd} alt="Adobe XD" className="skills__tech-logo" /> },
      { name: 'Wireframing', level: 92, icon: <img src={wireframe_icon} alt="Wireframing" className="skills__tech-logo" /> },
      { name: 'Prototyping', level: 100, icon: <img src={prototype_icon} alt="Prototyping" className="skills__tech-logo" /> },
      { name: 'User Research', level: 80, icon: <img src={research_icon} alt="User Research" className="skills__tech-logo" /> },
      { name: 'Design Systems', level: 85, icon: <img src={design_sys_icon} alt="Design Systems" className="skills__tech-logo" /> },
      { name: 'Responsive UI', level: 95, icon: <img src={responsive_icon} alt="Responsive UI" className="skills__tech-logo" /> },
    ],
  },
  {
    id: 'frontend',
    title: 'Frontend Development',
    icon: <img src={react_icon} alt="Frontend" className="skills__category-img" />,
    color: '#22D3EE',
    skills: [
      { name: 'HTML5', level: 95, icon: <img src={html_icon} alt="HTML5" className="skills__tech-logo" /> },
      { name: 'CSS3', level: 95, icon: <img src={css_icon} alt="CSS3" className="skills__tech-logo" /> },
      { name: 'JavaScript', level: 80, icon: <img src={js_icon} alt="JavaScript" className="skills__tech-logo" /> },
      { name: 'React.js', level: 85, icon: <img src={react_icon} alt="React" className="skills__tech-logo" /> },
      { name: 'Tailwind CSS', level: 90, icon: <img src={tailwind_icon} alt="Tailwind" className="skills__tech-logo" /> },
      { name: 'Bootstrap', level: 80, icon: <img src={bootstrap_icon} alt="Bootstrap" className="skills__tech-logo" /> },
      { name: 'GSAP', level: 50, icon: <img src={gsap_icon} alt="GSAP" className="skills__tech-logo" /> },
    ],
  },
  {
    id: 'backend',
    title: 'Backend Development',
    icon: <img src={spring_icon} alt="Backend" className="skills__category-img" />,
    color: '#8B5CF6',
    skills: [
      { name: 'Java', level: 90, icon: <img src={java_icon} alt="Java" className="skills__tech-logo" /> },
      { name: 'Core Java', level: 88, icon: <img src={core_java_icon} alt="Core Java" className="skills__tech-logo" /> },
      { name: 'Spring Boot', level: 85, icon: <img src={spring_icon} alt="Spring Boot" className="skills__tech-logo" /> },
      { name: 'Hibernate', level: 82, icon: <img src={hibernate_icon} alt="Hibernate" className="skills__tech-logo" /> },
      { name: 'Servlet', level: 80, icon: <img src={servlet_icon} alt="Servlet" className="skills__tech-logo" /> },
      { name: 'JSP', level: 78, icon: <img src={jsp_icon} alt="JSP" className="skills__tech-logo" /> },
      { name: 'REST APIs', level: 88, icon: <img src={rest_icon} alt="REST APIs" className="skills__tech-logo" /> },
    ],
  },
  {
    id: 'database',
    title: 'Database Design',
    icon: <img src={mysql_icon} alt="Database" className="skills__category-img" />,
    color: '#06B6D4',
    skills: [
      { name: 'MySQL', level: 90, icon: <img src={sql} alt="MySQL" className="skills__tech-logo" /> },
      { name: 'MySQL Workbench', level: 85, icon: <img src={mysql_icon} alt="MySQL Workbench" className="skills__tech-logo" /> },
      { name: 'Database Design', level: 88, icon: <img src={db_design_icon} alt="Database Design" className="skills__tech-logo" /> },
      { name: 'SQL Queries', level: 92, icon: <img src={sql_icon} alt="SQL Queries" className="skills__tech-logo" /> },
      { name: 'Relational Modeling', level: 85, icon: <img src={db_design_icon} alt="Relational Modeling" className="skills__tech-logo" /> },
    ],
  },
];

const SkillCategory = ({ category, catIndex }) => {
  const [isVisible, setIsVisible] = useState(false);
  const blockRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15 }
    );
    if (blockRef.current) observer.observe(blockRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={blockRef}
      className={`skills__category-block ${isVisible ? 'skills__category-block--visible' : ''}`}
      style={{ '--cat-color': category.color }}
    >
      <Magnetic>
        <div className="skills__category-header" data-cursor-hover>
          <span className="skills__category-icon">
            {typeof category.icon === 'string' && category.icon.startsWith('http') ? (
              <img
                src={category.icon}
                alt=""
                className="skills__category-img"
                onError={(e) => e.target.style.display = 'none'}
              />
            ) : (
              category.icon
            )}
          </span>
          <h3 className="skills__category-title">{category.title}</h3>
        </div>
      </Magnetic>

      <div className="skills__grid">
        {category.skills.map((skill, i) => (
          <div
            key={skill.name}
            className="skills__item glass-card"
            style={{
              '--delay': `${i * 0.05}s`,
              '--skill-color': category.color
            }}
          >
            <div className="skills__item-header">
              <div className="skills__item-info">
                <span className="skills__item-icon">
                  {typeof skill.icon === 'string' && skill.icon.startsWith('http') ? (
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      className="skills__tech-logo"
                      onError={(e) => e.target.style.display = 'none'}
                    />
                  ) : (
                    skill.icon
                  )}
                </span>
                <span className="skills__item-name">{skill.name}</span>
              </div>
              <span className="skills__item-level">{skill.level}%</span>
            </div>
            <div className="skills__item-bar">
              <div
                className="skills__item-fill"
                style={{
                  width: isVisible ? `${skill.level}%` : '0%',
                  transitionDelay: `${(i * 0.1) + 0.2}s`,
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Skills = () => {
  const sectionRef = useRef(null);

  return (
    <section id="skills" ref={sectionRef} className="skills section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">My Skills</span>
          <h2 className="section-title">
            <span className="gradient-text">Technologies</span> & <span className="gradient-text">Expertise</span>
          </h2>
          <p className="section-subtitle">
            A comprehensive toolkit spanning design, frontend, backend, and database technologies.
          </p>
        </div>

        {/* All Skills Categories */}
        <div className="skills__all-categories">
          {skillCategories.map((category, catIndex) => (
            <SkillCategory
              key={category.id}
              category={category}
              catIndex={catIndex}
            />
          ))}
        </div>

        {/* Floating Skill Orbit */}
        <div className="skills__orbit">
          <div className="skills__orbit-ring" />
          <div className="skills__orbit-ring skills__orbit-ring--2" />
          {skillCategories.map((cat, i) => (
            <div
              key={cat.id}
              className="skills__orbit-node"
              style={{
                '--angle': `${(360 / skillCategories.length) * i - 90}deg`,
                '--color': cat.color,
              }}
            >
              <span>
                {typeof cat.icon === 'string' && cat.icon.startsWith('http') ? (
                  <img src={cat.icon} alt="" className="skills__orbit-img" />
                ) : (
                  cat.icon
                )}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
