import { useEffect, useRef } from 'react';
import './Testimonials.css';

const testimonials = [
  {
    name: 'Client Name',
    role: 'Project Manager',
    text: '"Rekshin delivered an outstanding product that exceeded our expectations. The attention to detail in both design and code quality was remarkable."',
    avatar: '🧑‍💼',
  },
  {
    name: 'Team Lead',
    role: 'Tech Lead',
    text: '"Working with Rekshin was a pleasure. The modern UI/UX design combined with a robust backend architecture made the project a huge success."',
    avatar: '👨‍💻',
  },
  {
    name: 'Startup Founder',
    role: 'CEO',
    text: '"The portfolio-level quality that he brings to every project is unmatched. Premium design meets scalable engineering — exactly what we needed."',
    avatar: '👩‍💼',
  },
];

const Testimonials = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('testimonials--visible');
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="testimonials" ref={sectionRef} className="testimonials section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Testimonials</span>
          <h2 className="section-title">
            What People <span className="gradient-text">Say</span>
          </h2>
        </div>

        <div className="testimonials__grid">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="testimonials__card glass-card gradient-border"
              style={{ '--delay': `${i * 0.15}s` }}
            >
              <div className="testimonials__quote-icon">❝</div>
              <p className="testimonials__text">{t.text}</p>
              <div className="testimonials__author">
                <span className="testimonials__avatar">{t.avatar}</span>
                <div>
                  <span className="testimonials__name">{t.name}</span>
                  <span className="testimonials__role">{t.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
