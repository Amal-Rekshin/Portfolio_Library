import { useRef } from 'react';
import { motion } from 'framer-motion';
import LazyImage from './LazyImage';
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
    id: 'frontend',
    title: 'Frontend Development',
    icon: <LazyImage src={react_icon} alt="Frontend" className="skills__category-img" />,
    color: '#22D3EE',
    skills: [
      { name: 'HTML5', level: 95, icon: <LazyImage src={html_icon} alt="HTML5" className="skills__tech-logo" /> },
      { name: 'CSS3', level: 95, icon: <LazyImage src={css_icon} alt="CSS3" className="skills__tech-logo" /> },
      { name: 'JavaScript', level: 80, icon: <LazyImage src={js_icon} alt="JavaScript" className="skills__tech-logo" /> },
      { name: 'React.js', level: 85, icon: <LazyImage src={react_icon} alt="React" className="skills__tech-logo" /> },
      { name: 'Tailwind CSS', level: 90, icon: <LazyImage src={tailwind_icon} alt="Tailwind" className="skills__tech-logo" /> },
      { name: 'Bootstrap', level: 80, icon: <LazyImage src={bootstrap_icon} alt="Bootstrap" className="skills__tech-logo" /> },
      { name: 'GSAP', level: 50, icon: <LazyImage src={gsap_icon} alt="GSAP" className="skills__tech-logo" /> },
    ],
  },
  {
    id: 'backend',
    title: 'Backend Development',
    icon: <LazyImage src={spring_icon} alt="Backend" className="skills__category-img" />,
    color: '#8B5CF6',
    skills: [
      { name: 'Java', level: 90, icon: <LazyImage src={java_icon} alt="Java" className="skills__tech-logo" /> },
      { name: 'Core Java', level: 88, icon: <LazyImage src={core_java_icon} alt="Core Java" className="skills__tech-logo" /> },
      { name: 'Spring Boot', level: 85, icon: <LazyImage src={spring_icon} alt="Spring Boot" className="skills__tech-logo" /> },
      { name: 'Hibernate', level: 82, icon: <LazyImage src={hibernate_icon} alt="Hibernate" className="skills__tech-logo" /> },
      { name: 'Servlet', level: 80, icon: <LazyImage src={servlet_icon} alt="Servlet" className="skills__tech-logo" /> },
      { name: 'JSP', level: 78, icon: <LazyImage src={jsp_icon} alt="JSP" className="skills__tech-logo" /> },
      { name: 'REST APIs', level: 88, icon: <LazyImage src={rest_icon} alt="REST APIs" className="skills__tech-logo" /> },
    ],
  },
  {
    id: 'design',
    title: 'UI/UX Design',
    icon: <LazyImage src={figma_icon} alt="Design" className="skills__category-img" />,
    color: '#EC4899',
    skills: [
      { name: 'Figma', level: 100, icon: <LazyImage src={figma_icon} alt="Figma" className="skills__tech-logo" /> },
      { name: 'Adobe XD', level: 85, icon: <LazyImage src={adobe_xd} alt="Adobe XD" className="skills__tech-logo" /> },
      { name: 'Wireframing', level: 92, icon: <LazyImage src={wireframe_icon} alt="Wireframing" className="skills__tech-logo" /> },
      { name: 'Prototyping', level: 100, icon: <LazyImage src={prototype_icon} alt="Prototyping" className="skills__tech-logo" /> },
      { name: 'User Research', level: 80, icon: <LazyImage src={research_icon} alt="User Research" className="skills__tech-logo" /> },
      { name: 'Design Systems', level: 85, icon: <LazyImage src={design_sys_icon} alt="Design Systems" className="skills__tech-logo" /> },
      { name: 'Responsive UI', level: 95, icon: <LazyImage src={responsive_icon} alt="Responsive UI" className="skills__tech-logo" /> },
    ],
  },
  {
    id: 'database',
    title: 'Database Design',
    icon: <LazyImage src={mysql_icon} alt="Database" className="skills__category-img" />,
    color: '#06B6D4',
    skills: [
      { name: 'MySQL', level: 90, icon: <LazyImage src={sql} alt="MySQL" className="skills__tech-logo" /> },
      { name: 'MySQL Workbench', level: 85, icon: <LazyImage src={mysql_icon} alt="MySQL Workbench" className="skills__tech-logo" /> },
      { name: 'Database Design', level: 88, icon: <LazyImage src={db_design_icon} alt="Database Design" className="skills__tech-logo" /> },
      { name: 'SQL Queries', level: 92, icon: <LazyImage src={sql_icon} alt="SQL Queries" className="skills__tech-logo" /> },
      { name: 'Relational Modeling', level: 85, icon: <LazyImage src={db_design_icon} alt="Relational Modeling" className="skills__tech-logo" /> },
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { y: 40, opacity: 0, scale: 0.95 },
  visible: { y: 0, opacity: 1, scale: 1, transition: { type: 'spring', bounce: 0.4, duration: 0.8 } }
};

const skillItemVariants = {
  hidden: { y: 20, opacity: 0, scale: 0.8 },
  visible: { y: 0, opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 100, damping: 10 } }
};

const SkillCategory = ({ category }) => {
  return (
    <motion.div
      variants={itemVariants}
      className={`skills__bento-box skills__bento-box--${category.id}`}
      style={{ '--cat-color': category.color }}
      whileHover="hover"
    >
      <div className="skills__bento-glow" />
      <div className="skills__bento-content">
        <Magnetic>
          <div className="skills__category-header" data-cursor-hover>
            <span className="skills__category-icon">
              {typeof category.icon === 'string' && category.icon.startsWith('http') ? (
                <LazyImage
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

        <motion.div
          className="skills__tags-cloud"
          variants={{
            visible: { transition: { staggerChildren: 0.05, delayChildren: 0.2 } }
          }}
        >
          {category.skills.map((skill) => (
            <motion.div
              variants={skillItemVariants}
              key={skill.name}
              className="skills__tag"
              style={{ '--skill-color': category.color }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="skills__tag-icon">
                {typeof skill.icon === 'string' && skill.icon.startsWith('http') ? (
                  <LazyImage
                    src={skill.icon}
                    alt={skill.name}
                    className="skills__tech-logo"
                    onError={(e) => e.target.style.display = 'none'}
                  />
                ) : (
                  skill.icon
                )}
              </span>
              <span className="skills__tag-name">{skill.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
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

        <motion.div
          className="skills__bento-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {skillCategories.map((category) => (
            <SkillCategory
              key={category.id}
              category={category}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
