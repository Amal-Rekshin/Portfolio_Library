import { useEffect, useRef, useState } from 'react';
import './Projects.css';
import rex from '../assets/rekshin.jpg'
import food_web from '../assets/project/project2.png'
import portfolio from '../assets/project/project3.jpg'
import clock from '../assets/project/project1.png'
import timetable from '../assets/project/project4.png'
import { time } from 'framer-motion';

const projects = [
  {
    title: 'E-Commerce Platform',
    desc: 'A full-stack e-commerce platform with product management, cart system, user authentication, and admin dashboard built with React and Spring Boot.',
    image: food_web,
    tags: ['React.js', 'Spring Boot', 'MySQL', 'REST API'],
    color: '#7C3AED',
    category: 'Full Stack',
    liveDemo: 'https://foodie-sites.netlify.app',
    github: 'https://github.com/Amal-Rekshin/Food-Web.git',
  },
  {
    title: 'Portfolio Website',
    desc: 'An ultra-premium portfolio website with cinematic animations, glassmorphism, interactive elements, and smooth scroll storytelling experience.',
    image: portfolio,
    tags: ['React.js', 'GSAP', 'CSS3', 'Framer Motion'],
    color: '#06B6D4',
    category: 'Frontend',
    liveDemo: 'https://foodie-sites.netlify.app',
    github: 'https://github.com/Amal-Rekshin/Food-Web.git',
  },
  {
    title: 'Timetable Management System',
    desc: 'AI-powered timetable generator with conflict resolution, multi-department support, and automated scheduling algorithms.',
    image: timetable,
    tags: ['React.js', 'Spring Boot', 'Gemini AI', 'MySQL'],
    color: '#EC4899',
    category: 'Full Stack',
    liveDemo: 'https://foodie-sites.netlify.app',
    github: 'https://github.com/Amal-Rekshin/Food-Web.git',
  },
  {
    title: 'Academy Training Website',
    desc: 'Premium training academy website with course listings, lead generation, enrollment system, and responsive mobile-first design.',
    image: rex,
    tags: ['React.js', 'Tailwind CSS', 'Responsive', 'SEO'],
    color: '#8B5CF6',
    category: 'Frontend',
    liveDemo: 'https://foodie-sites.netlify.app',
    github: 'https://github.com/Amal-Rekshin/Food-Web.git',
  },
  {
    title: 'Admin Dashboard',
    desc: 'Comprehensive admin panel with analytics, user management, inventory tracking, and database schema visualization.',
    image: rex,
    tags: ['React.js', 'Spring Boot', 'MySQL', 'Charts'],
    color: '#22D3EE',
    category: 'Full Stack',
    liveDemo: 'https://foodie-sites.netlify.app',
    github: 'https://github.com/Amal-Rekshin/Food-Web.git',
  },
  {
    title: 'UI/UX Design System',
    desc: 'Complete design system with component library, typography scales, color palettes, and reusable design tokens for rapid prototyping.',
    image: rex,
    tags: ['Figma', 'Design System', 'Components', 'Tokens'],
    color: '#F59E0B',
    category: 'Design',
    liveDemo: 'https://foodie-sites.netlify.app',
    github: 'https://github.com/Amal-Rekshin/Food-Web.git',
  },
];

const techIcons = {
  'React.js': 'react',
  'Spring Boot': 'springboot',
  'MySQL': 'mysql',
  'REST API': 'postman',
  'GSAP': 'greensock',
  'CSS3': 'css',
  'Framer Motion': 'framer',
  'Gemini AI': 'google',
  'Tailwind CSS': 'tailwindcss',
  'Responsive': 'googlechrome',
  'SEO': 'google',
  'Charts': 'd3dotjs',
  'Figma': 'figma',
  'Design System': 'storybook',
  'Components': 'webcomponentsdotorg',
  'Tokens': 'adobe',
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
                    <img src={project.image} alt="" className='project-image'/>
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
                        <img 
                          src={`https://cdn.simpleicons.org/${techIcons[tag]}/ffffff`} 
                          alt="" 
                          className="projects__tag-icon" 
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
