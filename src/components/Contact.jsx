import { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact = () => {
  const sectionRef = useRef(null);
  const formRef = useRef();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [focused, setFocused] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const myemail = import.meta.env.VITE_EMAIL_USER;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('contact--visible');
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Use environment variables for EmailJS IDs
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID';
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID';
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY';

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        to_name: 'Antony Amal Rekshin',
        message: formData.message,
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    } catch (error) {
      console.error('EmailJS Error:', error);
      alert(`Failed to send: ${error?.text || 'Check your keys in the .env file'}`);
    } finally {
      setLoading(false);
    }
  };

  const socials = [
    {
      name: 'LinkedIn',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
      url: 'https://www.linkedin.com/in/antonyamalrekshin/',
      color: '#0A66C2',
    },
    {
      name: 'GitHub',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
        </svg>
      ),
      url: 'https://github.com/Amal-Rekshin',
      color: '#FFFFFF',
    },
    {
      name: 'Instagram',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
        </svg>
      ),
      url: 'https://www.instagram.com/_rekx_in/',
      color: '#E4405F',
    },
    {
      name: 'Email',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="4" width="20" height="16" rx="2"/>
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
        </svg>
      ),
      url: `mailto:${myemail}`,
      color: '#7C3AED',
    },
  ];

  return (
    <section id="contact" ref={sectionRef} className="contact section">
      {/* Background Grid */}
      <div className="contact__bg-grid" />
      <div className="contact__ambient contact__ambient--purple" />
      <div className="contact__ambient contact__ambient--cyan" />

      <div className="container">
        <div className="section-header">
          <span className="section-label">Get In Touch</span>
          <h2 className="section-title">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="section-subtitle">
            Have a project in mind? Let's create something extraordinary together.
          </p>
        </div>

        <div className="contact__grid">
          {/* Form */}
          <form ref={formRef} className="contact__form glass-card" onSubmit={handleSubmit}>
            <div className={`contact__field ${focused === 'name' || formData.name ? 'contact__field--active' : ''}`}>
              <label className="contact__label" htmlFor="contact-name">Your Name</label>
              <input
                id="contact-name"
                type="text"
                className="contact__input"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                onFocus={() => setFocused('name')}
                onBlur={() => setFocused('')}
                required
              />
              <div className="contact__input-glow" />
            </div>

            <div className={`contact__field ${focused === 'email' || formData.email ? 'contact__field--active' : ''}`}>
              <label className="contact__label" htmlFor="contact-email">Your Email</label>
              <input
                id="contact-email"
                type="email"
                className="contact__input"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                onFocus={() => setFocused('email')}
                onBlur={() => setFocused('')}
                required
              />
              <div className="contact__input-glow" />
            </div>

            <div className={`contact__field ${focused === 'message' || formData.message ? 'contact__field--active' : ''}`}>
              <label className="contact__label" htmlFor="contact-message">Your Message</label>
              <textarea
                id="contact-message"
                className="contact__input contact__textarea"
                rows="5"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                onFocus={() => setFocused('message')}
                onBlur={() => setFocused('')}
                required
              />
              <div className="contact__input-glow" />
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`contact__submit btn-primary ${submitted ? 'contact__submit--sent' : ''} ${loading ? 'contact__submit--loading' : ''}`}
              data-cursor-hover
            >
              {loading ? (
                <>
                  <div className="spinner" />
                  <span>Sending...</span>
                </>
              ) : submitted ? (
                <>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
                  <span>Message Sent!</span>
                </>
              ) : (
                <>
                  <span>Send Message</span>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
                </>
              )}
            </button>
          </form>

          {/* Info Side */}
          <div className="contact__info">
            <div className="contact__info-card glass-card">
              <h3 className="contact__info-title">Let's build something amazing</h3>
              <p className="contact__info-desc">
                Whether you need a premium website, a scalable full-stack application,
                or a stunning UI/UX design — I'm here to bring your vision to life.
              </p>
            </div>

            <div className="contact__socials">
              {socials.map((social, i) => (
                <a
                  key={i}
                  href={social.url}
                  className="contact__social glass-card"
                  style={{ '--social-color': social.color, '--delay': `${i * 0.1}s` }}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor-hover
                >
                  <span className="contact__social-icon">{social.icon}</span>
                  <span className="contact__social-name">{social.name}</span>
                  <svg className="contact__social-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17L17 7M17 7H7M17 7v10"/></svg>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
