import { useEffect, useRef, useState } from 'react';
import LazyImage from './LazyImage';
import './Projects.css';
import food_web from '../assets/project/project2.png'
import cctv from '../assets/project/project3.png'
import clock from '../assets/project/project1.png'
import timetable from '../assets/project/project4.png'
import chat from '../assets/project/project5.jpeg'
import ledger from '../assets/project/project6.jpeg'
import freshrstop from '../assets/project/project7.jpeg'
import student from '../assets/project/project8.jpeg'
import { time } from 'framer-motion';

const projects = [
  {
    title: 'E-Commerce Platform',
    desc: 'Foodie is a full-stack e-commerce platform developed using React.js, Spring Boot, and MySQL, featuring a modern user interface with theme-based landing pages, food ordering, cart management, and secure payment integration.',
    image: food_web,
    tags: ['React.js', 'Spring Boot', 'MySQL', 'REST API'],
    color: '#7C3AED',
    category: 'Full Stack',
    liveDemo: 'https://foodie-sites.netlify.app',
    github: 'https://github.com/Amal-Rekshin/Food-Web.git',
  },
    {
      title: 'Timetable Management System',
      desc: 'AI Timetable Cloud Management is an intelligent full-stack university scheduling system built with React, Spring Boot, MySQL, and Google Gemini AI, designed to automatically generate conflict-free timetables using AI-driven optimization and cloud-based management.',
    image: timetable,
    tags: ['React.js', 'Spring Boot', 'Gemini AI', 'MySQL'],
    color: '#EC4899',
    category: 'Full Stack',
    liveDemo: 'https://classtimescheduler.netlify.app',
    github: 'https://github.com/Amal-Rekshin/TimeTable_FullStack_Code.git',
  },
    {
    title: 'Chat Web & App',
    desc: 'Chat Web is a full-stack real-time messaging platform built with Java Spring Boot, React, MySQL, and Native Android integration, enabling secure instant communication through WebSockets, JWT authentication, and a modern responsive user experience.',
    image: chat,
    tags: ['React.js', 'Spring Boot', 'PostgreSQL', 'Charts','Native'],
    color: '#22D3EE',
    category: 'Full Stack',
    liveDemo: 'https://chat-organization.netlify.app',
    github: 'https://github.com/Amal-Rekshin/Chat_Web.git',
  },
  {
    title: 'Client Vendor Ledger Management',
    desc: 'Client Vendor Ledger Management is a robust full-stack enterprise solution developed with React, Spring Boot, Postgresql providing secure, real-time financial tracking, vendor-client management, and comprehensive reporting for businesses.',
    image: ledger,
    tags: ['React.js', 'Spring Boot', 'PostgreSQL','REST API','Charts'],
    color: '#15b73bff',
    category: 'Full Stack',
    liveDemo: 'https://vender-ledger.netlify.app',
    github: 'https://github.com/Amal-Rekshin/ledger.git',
  },
  {
    title: 'UI/UX Design System',
    desc: 'A premium design system and component library for modern web applications built with Figma, featuring a comprehensive set of reusable UI components, design tokens, typography scales, color palettes, and interactive prototyping elements.',
    image: freshrstop,
    tags: ['Figma', 'Design System', 'Components',],
    color: '#F59E0B',
    category: 'Design',
    liveDemo: 'https://www.figma.com/design/2BVF50HJNmJEzmWdGPnxxN/FreshRstop?node-id=0-1&t=9iroOqhCbUTQxIQv-1',
    github: 'https://github.com/Amal-Rekshin',
  },
  {
    title: 'CCTV Service Management System',
    desc: 'CCTV Service Management System is a full-stack web application built with React.js, Node JS, Express JS, and PostgreSQL, designed to efficiently manage CCTV installations, maintenance, and customer service requests.',
    image: cctv,
    tags: ['React.js', 'Node JS', 'Express JS', 'PostgreSQL'],
    color: '#b1bb00ff',
    category: 'Full Stack',
    liveDemo: 'https://cctv-service-1.onrender.com',
    github: 'https://github.com/Amal-Rekshin/CCTV_Service.git',
  },
  {
    title: 'Digital Clock',
    desc: 'Digital Clock is a simple and intuitive clock application built with React.js, featuring a modern user interface, real-time clock display, and customizable clock settings.',
    image: clock,
    tags: ['JavaScript', 'CSS3', 'HTML5'],
    color: '#06B6D4',
    category: 'Frontend',
    liveDemo: 'https://dctimes.netlify.app',
    github: 'https://github.com/Amal-Rekshin/Digital_Clock.git',
  },
    {
    title: 'Student Managament System',
    desc: 'Student Management System is a full-stack web application built with React.js, Spring Boot, and PostgreSQL, designed to efficiently manage student information, and administrative tasks.',
    image: student,
    tags: ['React.js', 'Spring Boot', 'PostgreSQL','REST API'],
    color: '#8B5CF6',
    category: 'FullStack',
    liveDemo: 'https://stumanagefrontend.netlify.app',
    github: 'https://github.com/Amal-Rekshin/StudentManagement_Frontend',
  },
];

const techIcons = {
  'React.js': 'react',
  'Spring Boot': 'springboot',
  'MySQL': 'mysql',
  'REST API': 'postman',
  'GSAP': 'greensock',
  'CSS3': 'css3',
  'Framer Motion': 'framer',
  'Gemini AI': 'google',
  'Tailwind CSS': 'tailwindcss',
  'Responsive': 'googlechrome',
  'SEO': 'google',
  'Charts': 'd3dotjs',
  'Figma': 'figma',
  'Design System': 'storybook',
  'Components': 'webcomponentsdotorg',
  'Tokens': 'json',
  'HTML5': 'html5',
  'JavaScript': 'javascript',
  'Bootstrap': 'bootstrap',
  'Spring': 'spring',
  'Hibernate': 'hibernate',
  'Servlet': 'apachetomcat',
  'PostgreSQL': 'postgresql',
  'Adobe XD': 'sketch',
  'Native': 'android',
  'Node JS': 'nodedotjs',
  'Express JS': 'express'
};
const Projects = () => {
  const sectionRef = useRef(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('projects--visible');
          }
        });
      },
      { threshold: 0.08 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="projects section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">My Work</span>
          <h2 className="section-title">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-subtitle">
            A curated selection of projects showcasing design thinking and technical expertise.
          </p>
          <div className="projects__card-tags" style={{ justifyContent: 'center', marginTop: '20px', flexWrap: 'wrap' }}>
            {Object.entries(techIcons).map(([techName, iconSlug], j) => (
              <span key={j} className="projects__card-tag">
                <LazyImage 
                  src={`https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/${iconSlug}.svg`} 
                  alt={techName} 
                  className="projects__tag-icon" 
                  style={{ filter: 'brightness(0) invert(1)' }}
                />
                {techName}
              </span>
            ))}
          </div>
    </div>

        <div className="projects__grid">
          {projects.map((project, i) => (
            <div
              key={i}
              className="projects__card"
              style={{ '--delay': `${i * 0.1}s`, '--project-color': project.color }}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              data-cursor-hover >
              {/* Image area */}
              <div className="projects__card-image">
                <div className="projects__card-placeholder" style={{ background: `linear-gradient(135deg, ${project.color}20, ${project.color}08)` }}>
                    <LazyImage src={project.image} alt="" className='project-image'/>
                </div>
                <div className="projects__card-overlay">
                  <div className="projects__card-actions">
                    <button className="projects__card-action" data-cursor-hover onClick={() => window.open(project.liveDemo, "_blank")}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"/></svg>
                      <span className='project_livedemo'>Live Demo</span>
                    </button>
                    <button className="projects__card-action" data-cursor-hover onClick={() => window.open(project.github, "_blank")}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
                      <span className='project_livedemo'>GitHub</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="projects__card-content">
                <h3 className="projects__card-title">{project.title}</h3>
                <p className="projects__card-desc">{project.desc}</p>
                <div className="projects__card-tags">
                  {project.tags.map((tag, j) => (
                    <span key={j} className="projects__card-tag">
                      {techIcons[tag] && (
                        <LazyImage 
                          src={`https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/${techIcons[tag]}.svg`} 
                          alt="" 
                          className="projects__tag-icon" 
                          style={{ filter: 'brightness(0) invert(1)' }}
                        />
                      )}
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Glow */}
              <div
                className="projects__card-glow"
                style={{
                  opacity: hoveredIndex === i ? 1 : 0,
                  background: `radial-gradient(circle at 50% 0%, ${project.color}20, transparent 60%)`,
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
