import { useEffect, useRef, useState } from 'react';
import LazyImage from './LazyImage';
import Magnetic from './Magnetic';
import './Hero.css';
import figma_icon from '../assets/figma.png';
import react_icon from '../assets/react.png';
import tailwind_icon from '../assets/tailwind.png';
import spring_icon from '../assets/spring.png';
import java_icon from '../assets/java.png';
import mysql_icon from '../assets/mysql.png';

const roles = [
  'UI/UX Designer',
  'React Developer',
  'Spring Boot Developer',
  'Creative Developer',
  'Full Stack Engineer',
];

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const sectionRef = useRef(null);
  const floatingRef = useRef(null);

  // Typewriter effect
  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timeout;

    if (!isDeleting && displayText.length < currentRole.length) {
      timeout = setTimeout(() => {
        setDisplayText(currentRole.slice(0, displayText.length + 1));
      }, 80);
    } else if (!isDeleting && displayText.length === currentRole.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayText.length > 0) {
      timeout = setTimeout(() => {
        setDisplayText(currentRole.slice(0, displayText.length - 1));
      }, 40);
    } else if (isDeleting && displayText.length === 0) {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  // Parallax on mouse move
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!floatingRef.current || window.innerWidth < 768) return;
      const x = (e.clientX / window.innerWidth - 0.5) * 30;
      const y = (e.clientY / window.innerHeight - 0.5) * 30;
      floatingRef.current.style.transform = `translate(${x}px, ${y}px)`;
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Scroll-triggered animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('hero--visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const techCards = [
    { icon: <LazyImage src={react_icon} alt="React" className="hero__tech-img" />, label: 'React', color: '#61DAFB' },
    { icon: <LazyImage src={spring_icon} alt="Spring Boot" className="hero__tech-img" />, label: 'Spring Boot', color: '#6DB33F' },
    { icon: <LazyImage src={figma_icon} alt="Figma" className="hero__tech-img" />, label: 'Figma', color: '#F24E1E' },
    { icon: <LazyImage src={mysql_icon} alt="MySQL" className="hero__tech-img" />, label: 'MySQL', color: '#4479A1' },
    { icon: <LazyImage src={java_icon} alt="Java" className="hero__tech-img" />, label: 'Java', color: '#ED8B00' },
    { icon: <LazyImage src={tailwind_icon} alt="Tailwind CSS" className="hero__tech-img" />, label: 'Tailwind CSS', color: '#06B6D4' },
  ];

  return (
    <section id="hero" ref={sectionRef} className="hero">
      <div className="hero__bg-grid" />
      <div className="hero__gradient-orb hero__gradient-orb--1" />
      <div className="hero__gradient-orb hero__gradient-orb--2" />
      <div className="hero__gradient-orb hero__gradient-orb--3" />

      {/* Floating Particles */}
      <div className="hero__particles">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="hero__particle"
            style={{
              '--x': `${Math.random() * 100}%`,
              '--y': `${Math.random() * 100}%`,
              '--duration': `${3 + Math.random() * 5}s`,
              '--delay': `${Math.random() * 3}s`,
              '--size': `${2 + Math.random() * 3}px`,
            }}
          />
        ))}
      </div>

      <div className="hero__container container">
        <div className="hero__content">
          <div className="hero__badge">
            <span className="hero__badge-dot" />
            Available for Work
          </div>

          <h1 className="hero__title">
            <span className="hero__title-line hero__title-line--1">
              Hi, I'm <span className="hero__name">Antony</span>
            </span>
            <span className="hero__title-line hero__title-line--2">
              <span className="hero__name">Amal Rekshin A</span>
            </span>
          </h1>

          <div className="hero__role">
            <span className="hero__role-static">I'm a </span>
            <span className="hero__role-dynamic">
              {displayText}
              <span className="hero__cursor">|</span>
            </span>
          </div>

          <p className="hero__description">
            I design futuristic user experiences and build scalable full stack
            applications with modern technologies and cinematic interactions.
          </p>

          <div className="hero__actions">
            <Magnetic>
              <a href="#projects" className="btn-primary hero__btn" data-cursor-hover>
                <span>View Projects</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </a>
            </Magnetic>
            <Magnetic>
              <a href="#contact" className="btn-secondary hero__btn" data-cursor-hover>
                <span>Contact Me</span>
              </a>
            </Magnetic>
          </div>

          <div className="hero__stats">
            <div className="hero__stat">
              <span className="hero__stat-number">15+</span>
              <span className="hero__stat-label">Projects</span>
            </div>
            <div className="hero__stat-divider" />
            <div className="hero__stat">
              <span className="hero__stat-number">14+</span>
              <span className="hero__stat-label">Technologies</span>
            </div>
            <div className="hero__stat-divider" />
            <div className="hero__stat">
              <span className="hero__stat-number">∞</span>
              <span className="hero__stat-label">Passion</span>
            </div>
          </div>
        </div>

        <div className="hero__visual" ref={floatingRef}>
          <div className="hero__visual-ring hero__visual-ring--outer" />
          <div className="hero__visual-ring hero__visual-ring--inner" />
          <div className="hero__visual-center">
            <span className="hero__visual-spark">
              ⚡
            </span>
          </div>

          {techCards.map((card, i) => (
            <div
              key={card.label}
              className="hero__tech-card"
              style={{
                '--angle': `${(360 / techCards.length) * i}deg`,
                '--delay': `${i * 0.0}s`,
                '--color': card.color,
              }}
            >
              <span className="hero__tech-icon">
                {card.icon}
              </span>
              <span className="hero__tech-label">{card.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="hero__scroll-indicator">
        <div className="hero__scroll-mouse">
          <div className="hero__scroll-wheel" />
        </div>
        <span className="hero__scroll-text">Scroll Down</span>
      </div>
    </section>
  );
};

export default Hero;
