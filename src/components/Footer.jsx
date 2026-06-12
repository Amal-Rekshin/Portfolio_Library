import './Footer.css';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="footer__gradient-line" />

      <div className="container">
        <div className="footer__content">
          <div className="footer__brand">
            <div className="footer__logo" onClick={scrollToTop} data-cursor-hover>
              {/* <span className="footer__logo-icon">⚡</span> */}
              <span className="footer__logo-text">Rekshin</span>
            </div>
            <p className="footer__tagline">
              Crafting Premium Digital Experiences<br />with Design, Logic & Innovation
            </p>
          </div>

          <div className="footer__links">
            <h4 className="footer__links-title">Quick Links</h4>
            <a href="#hero" className="footer__link" data-cursor-hover>Home</a>
            <a href="#about" className="footer__link" data-cursor-hover>About</a>
            <a href="#skills" className="footer__link" data-cursor-hover>Skills</a>
            <a href="#projects" className="footer__link" data-cursor-hover>Projects</a>
            <a href="#contact" className="footer__link" data-cursor-hover>Contact</a>
          </div>

          <div className="footer__links">
            <h4 className="footer__links-title">Services</h4>
            <span className="footer__link">UI/UX Design</span>
            <span className="footer__link">Frontend Dev</span>
            <span className="footer__link">Backend Dev</span>
            <span className="footer__link">Full Stack</span>
            <span className="footer__link">Database Design</span>
          </div>

          <div className="footer__cta">
            <h4 className="footer__links-title">Let's Connect</h4>
            <p className="footer__cta-desc">
              Ready to start your next project?
            </p>
            <a href="#contact" className="btn-primary footer__cta-btn" data-cursor-hover>
              <span>Get In Touch</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </a>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__copyright">
            © 2024 — Designed & Developed by <span className="footer__highlight">Antony Amal Rekshin A</span>
          </p>

          <button className="footer__back-to-top" onClick={scrollToTop} data-cursor-hover>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 19V5M5 12l7-7 7 7" /></svg>
            <span>Back to Top</span>
          </button>
        </div>
      </div>

      {/* Floating particles */}
      <div className="footer__particles">
        {Array.from({ length: 10 }).map((_, i) => (
          <div
            key={i}
            className="footer__particle"
            style={{
              '--x': `${Math.random() * 100}%`,
              '--y': `${Math.random() * 100}%`,
              '--duration': `${3 + Math.random() * 4}s`,
              '--delay': `${Math.random() * 2}s`,
              '--size': `${2 + Math.random() * 3}px`,
            }}
          />
        ))}
      </div>
    </footer>
  );
};

export default Footer;
