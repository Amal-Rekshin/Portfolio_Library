import { useEffect, useRef } from 'react';
import LazyImage from './LazyImage';
import './About.css';
import rex from '../assets/rekshin.jpg'
import figma_icon from '../assets/figma.png';
import react_icon from '../assets/react.png';
import spring_icon from '../assets/spring.png';
import mysql_icon from '../assets/mysql.png';
import stack from '../assets/stack.png';

const About = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('about--visible');
          }
        });
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const timeline = [
    {
      year: 'Foundation',
      title: 'UI/UX Design Mastery',
      desc: 'Built a strong foundation in user-centered design, wireframing, prototyping, and design systems using Figma and Adobe XD.',
      icon: <LazyImage src={figma_icon} alt="Design" className="about__timeline-img" />,
    },
    {
      year: 'Frontend',
      title: 'Frontend Development',
      desc: 'Mastered React.js, JavaScript, Tailwind CSS, and CSS animations to build interactive, responsive web applications.',
      icon: <LazyImage src={react_icon} alt="Frontend" className="about__timeline-img" />,
    },
    {
      year: 'Backend',
      title: 'Backend Engineering',
      desc: 'Developed scalable server-side applications using Java, Spring Boot, Hibernate, REST APIs, and repository patterns.',
      icon: <LazyImage src={spring_icon} alt="Backend" className="about__timeline-img" />,
    },
    {
      year: 'Database',
      title: 'Database Architecture',
      desc: 'Designed efficient relational databases with MySQL, optimized queries, and modeled complex data relationships.',
      icon: <LazyImage src={mysql_icon} alt="Database" className="about__timeline-img" />,
    },
  ];

  return (
    <section id="about" ref={sectionRef} className="about section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">About Me</span>
          <h2 className="section-title">
            Crafting <span className="gradient-text">Premium Digital</span> Experiences
          </h2>
          <p className="section-subtitle">
            Passionate developer and designer focused on creating premium digital
            experiences with modern technologies, elegant interfaces, and scalable
            backend architectures.
          </p>
        </div>

        <div className="about__grid">
          <div className="about__image-wrapper">
            <div className="about__image-frame">
              <div className="about__image-placeholder">
                {/* <span className="about__image-icon">⚡</span> */}
                {/* <span className="about__image-name">Rekshin</span> */}
                <LazyImage src={rex} alt="" className='about__image-name' height={"100%"} width={"100%"} />
              </div>
              <div className="about__image-border" />
            </div>

            <div className="about__info-cards">
              <div className="about__info-card glass-card">
                <span className="about__info-icon">
                  <LazyImage src={stack} alt="Full Stack" height="30px" width="30px" />
                </span>
                <div>
                  <span className="about__info-value">Full Stack</span>
                  <span className="about__info-label">Developer</span>
                </div>
              </div>
              <div className="about__info-card glass-card">
                <span className="about__info-icon">
                  <LazyImage src={figma_icon} alt="UI/UX Design" height="30px" width="30px" />
                </span>
                <div>
                  <span className="about__info-value">Premium</span>
                  <span className="about__info-label">UI/UX Design</span>
                </div>
              </div>
            </div>
          </div>

          <div className="about__timeline">
            {timeline.map((item, i) => (
              <div
                key={i}
                className="about__timeline-item"
                style={{ '--delay': `${i * 0.15}s` }}
              >
                <div className="about__timeline-connector">
                  <div className="about__timeline-dot" />
                  {i < timeline.length - 1 && <div className="about__timeline-line" />}
                </div>
                <div className="about__timeline-card glass-card gradient-border">
                  <div className="about__timeline-header">
                    <span className="about__timeline-icon">
                      {typeof item.icon === 'string' && item.icon.startsWith('http') ? (
                        <LazyImage src={item.icon} alt="" className="about__timeline-img" />
                      ) : (
                        item.icon
                      )}
                    </span>
                    <span className="about__timeline-year">{item.year}</span>
                  </div>
                  <h3 className="about__timeline-title">{item.title}</h3>
                  <p className="about__timeline-desc">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="about__tagline-wrapper">
          <p className="about__tagline">
            "Crafting Premium Digital Experiences with Design, Logic & Innovation"
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
