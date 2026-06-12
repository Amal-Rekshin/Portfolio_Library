import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import './Preloader.css';

const Preloader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState('loading'); // loading, revealing, done
  const containerRef = useRef(null);
  const progressTextRef = useRef(null);
  const progressFillRef = useRef(null);
  const lettersRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          setPhase('revealing');
          
          const exitTl = gsap.timeline({
            onComplete: () => {
              setPhase('done');
              onComplete();
            }
          });

          // Scatter letters
          exitTl.to(".preloader__logo-letter", {
            x: () => (Math.random() - 0.5) * 1000,
            y: () => (Math.random() - 0.5) * 1000,
            z: () => Math.random() * 500,
            rotate: () => (Math.random() - 0.5) * 720,
            opacity: 0,
            duration: 1.2,
            ease: "power4.out",
            stagger: 0.02
          });

          // Explode tagline and progress
          exitTl.to([".preloader__tagline", ".preloader__progress-track", ".preloader__progress-text"], {
            y: 200,
            opacity: 0,
            filter: "blur(10px)",
            duration: 0.8,
            ease: "power2.in"
          }, 0);

          // Fade out background and particles
          exitTl.to([containerRef.current, ".preloader__bg-grid", ".preloader__particles"], {
            opacity: 0,
            duration: 1,
            ease: "power3.inOut"
          }, 0.2);
        }
      });

      // Animate progress
      tl.to({}, {
        duration: 2.5,
        onUpdate: function() {
          const p = Math.round(this.progress() * 100);
          setProgress(p);
          if (progressFillRef.current) {
            gsap.set(progressFillRef.current, { width: `${p}%` });
          }
        },
        ease: "power2.inOut"
      });

      // Animate logo letters
      tl.fromTo(".preloader__logo-letter", 
        { y: 40, opacity: 0, rotateX: 90 },
        { y: 0, opacity: 1, rotateX: 0, duration: 0.8, stagger: 0.1, ease: "back.out(1.7)" },
        0
      );

      // Animate tagline
      tl.fromTo(".preloader__tagline",
        { y: 15, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6 },
        1.0
      );

      // Animate particles
      gsap.to(".preloader__particle", {
        y: "-=30",
        opacity: "random(0.3, 0.7)",
        scale: "random(1, 1.5)",
        duration: "random(2, 4)",
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: {
          amount: 2,
          from: "random"
        }
      });
    });

    return () => ctx.revert();
  }, [onComplete]);

  return (
    <div
      ref={containerRef}
      className={`preloader ${phase === 'revealing' ? 'preloader--revealing' : ''} ${phase === 'done' ? 'preloader--done' : ''}`}
    >
      <div className="preloader__bg-grid" />
      <div className="preloader__particles">
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={i}
            className="preloader__particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${2 + Math.random() * 4}px`,
              height: `${2 + Math.random() * 4}px`,
            }}
          />
        ))}
      </div>

      <div className="preloader__content">
        <div className="preloader__logo">
          {['R', 'E', 'K', 'S', 'H', 'I', 'N'].map((letter, i) => (
            <span key={i} className="preloader__logo-letter">{letter}</span>
          ))}
        </div>

        <p className="preloader__tagline">Building Future Experiences</p>

        <div className="preloader__progress-track">
          <div
            ref={progressFillRef}
            className="preloader__progress-fill"
          />
        </div>
        <span ref={progressTextRef} className="preloader__progress-text">{progress}%</span>
      </div>

      <div className="preloader__ambient preloader__ambient--purple" />
      <div className="preloader__ambient preloader__ambient--cyan" />
    </div>
  );
};

export default Preloader;
