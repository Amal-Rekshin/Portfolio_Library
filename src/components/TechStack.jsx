import { useEffect, useRef } from 'react';
import './TechStack.css';
import adobe_xd from '../assets/adobe_xd.png';
import figma_icon from '../assets/figma.png';
import react_icon from '../assets/react.png';
import tailwind_icon from '../assets/tailwind.png';
import spring_icon from '../assets/spring.png';
import java_icon from '../assets/java.png';
import mysql_icon from '../assets/mysql.png';
import hibernate_icon from '../assets/hibernate.png';
import bootstrap_icon from '../assets/bootstrap.png';
import js_icon from '../assets/Javascript.png';
import html_icon from '../assets/HTML.png';
import css_icon from '../assets/CSS.png';
import rest_icon from '../assets/rest_API.png';
import git_icon from '../assets/git.png';
import github_icon from '../assets/github.png';

const technologies = [
  { name: 'React', icon: <img src={react_icon} alt="React" className="tech__item-img" /> },
  { name: 'Spring Boot', icon: <img src={spring_icon} alt="Spring Boot" className="tech__item-img" /> },
  { name: 'Java', icon: <img src={java_icon} alt="Java" className="tech__item-img" /> },
  { name: 'Tailwind CSS', icon: <img src={tailwind_icon} alt="Tailwind" className="tech__item-img" /> },
  { name: 'MySQL', icon: <img src={mysql_icon} alt="MySQL" className="tech__item-img" /> },
  { name: 'Figma', icon: <img src={figma_icon} alt="Figma" className="tech__item-img" /> },
  { name: 'Adobe XD', icon: <img src={adobe_xd} alt="Adobe XD" className="tech__item-img" /> },
  { name: 'Hibernate', icon: <img src={hibernate_icon} alt="Hibernate" className="tech__item-img" /> },
  { name: 'Bootstrap', icon: <img src={bootstrap_icon} alt="Bootstrap" className="tech__item-img" /> },
  { name: 'JavaScript', icon: <img src={js_icon} alt="JavaScript" className="tech__item-img" /> },
  { name: 'HTML5', icon: <img src={html_icon} alt="HTML5" className="tech__item-img" /> },
  { name: 'CSS3', icon: <img src={css_icon} alt="CSS3" className="tech__item-img" /> },
  { name: 'REST APIs', icon: <img src={rest_icon} alt="REST APIs" className="tech__item-img" /> },
  { name: 'Git', icon: <img src={git_icon} alt="Git" className="tech__item-img" /> },
  { name: 'GitHub', icon: <img src={github_icon} alt="GitHub" className="tech__item-img" /> },
];

const TechStack = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('tech--visible');
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Duplicate for seamless loop
  const techRow = [...technologies, ...technologies];

  return (
    <section id="tech" ref={sectionRef} className="tech section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Tech Stack</span>
          <h2 className="section-title">
            Tools I <span className="gradient-text">Work With</span>
          </h2>
        </div>
      </div>

      {/* Marquee Row 1 - Left */}
      <div className="tech__marquee-wrapper">
        <div className="tech__marquee tech__marquee--left">
          {techRow.map((tech, i) => (
            <div key={i} className="tech__item glass-card" data-cursor-hover>
              <span className="tech__item-icon">
                {typeof tech.icon === 'string' && tech.icon.startsWith('http') ? (
                  <img src={tech.icon} alt="" className="tech__item-img" />
                ) : (
                  tech.icon
                )}
              </span>
              <span className="tech__item-name">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Marquee Row 2 - Right */}
      <div className="tech__marquee-wrapper">
        <div className="tech__marquee tech__marquee--right">
          {[...techRow].reverse().map((tech, i) => (
            <div key={i} className="tech__item glass-card" data-cursor-hover>
              <span className="tech__item-icon">
                {typeof tech.icon === 'string' && tech.icon.startsWith('http') ? (
                  <img src={tech.icon} alt="" className="tech__item-img" />
                ) : (
                  tech.icon
                )}
              </span>
              <span className="tech__item-name">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
