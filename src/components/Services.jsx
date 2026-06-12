import { useEffect, useRef } from 'react';
import './Services.css';
import figma_icon from '../assets/figma.png';
import react_icon from '../assets/react.png';
import spring_icon from '../assets/spring.png';
import mysql_icon from '../assets/mysql.png';
import uiux_icon from '../assets/uiux.png';
import stack_icon from '../assets/stack.png';
import responsive_icon from '../assets/responsive_ui.png';

const services = [
  {
    icon: <img src={uiux_icon} alt="UI/UX" className="services__card-img" />,
    title: 'UI/UX Design',
    desc: 'Creating intuitive, beautiful interfaces that delight users with thoughtful interactions and pixel-perfect design systems.',
    features: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems'],
  },
  {
    icon: <img src={react_icon} alt="Frontend" className="services__card-img" />,
    title: 'Frontend Development',
    desc: 'Building blazing-fast, responsive web apps with React.js, modern CSS, and cinematic GSAP animations.',
    features: ['React.js', 'Responsive Design', 'Animations', 'Performance'],
  },
  {
    icon: <img src={spring_icon} alt="Backend" className="services__card-img" />,
    title: 'Backend Development',
    desc: 'Engineering scalable server-side solutions with Java, Spring Boot, REST APIs, and clean architecture patterns.',
    features: ['Spring Boot', 'REST APIs', 'Hibernate', 'Security'],
  },
  {
    icon: <img src={stack_icon} alt="Full Stack" className="services__card-img" />,
    title: 'Full Stack Development',
    desc: 'End-to-end application development combining beautiful frontends with powerful, scalable backend systems.',
    features: ['React + Spring Boot', 'API Integration', 'Deployment', 'Testing'],
  },
  {
    icon: <img src={mysql_icon} alt="Database" className="services__card-img" />,
    title: 'Database Architecture',
    desc: 'Designing efficient, normalized database schemas with optimized queries and complex relational modeling.',
    features: ['MySQL', 'Schema Design', 'Query Optimization', 'Data Modeling'],
  },
  {
    icon: <img src={responsive_icon} alt="Responsive Design" className="services__card-img" />,
    title: 'Responsive Web Design',
    desc: 'Crafting seamless experiences across all devices with mobile-first approaches and fluid, adaptive layouts.',
    features: ['Mobile-First', 'Cross-Browser', 'Fluid Layouts', 'Accessibility'],
  },
];

const Services = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('services--visible');
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" ref={sectionRef} className="services section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">What I Do</span>
          <h2 className="section-title">
            Services & <span className="gradient-text">Expertise</span>
          </h2>
          <p className="section-subtitle">
            Comprehensive digital solutions spanning design, development, and architecture.
          </p>
        </div>

        <div className="services__grid">
          {services.map((service, i) => (
            <div
              key={i}
              className="services__card gradient-border"
              style={{ '--delay': `${i * 0.1}s` }}
              data-cursor-hover
            >
              <div className="services__card-glow" />
              <div className="services__card-content">
                <div className="services__card-icon-wrapper">
                  <span className="services__card-icon">
                    {typeof service.icon === 'string' && service.icon.startsWith('http') ? (
                      <img src={service.icon} alt="" className="services__card-img" />
                    ) : (
                      service.icon
                    )}
                  </span>
                </div>
                <h3 className="services__card-title">{service.title}</h3>
                <p className="services__card-desc">{service.desc}</p>
                <div className="services__card-features">
                  {service.features.map((f, j) => (
                    <span key={j} className="services__card-feature">{f}</span>
                  ))}
                </div>
              </div>
              <div className="services__card-shine" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
