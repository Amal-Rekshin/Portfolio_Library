import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './ScrollProgress.css';

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const ScrollProgress = () => {
  const progressBarRef = useRef(null);

  useEffect(() => {
    // Animate the progress bar width based on scroll position
    const anim = gsap.to(progressBarRef.current, {
      scaleX: 1,
      ease: 'none',
      scrollTrigger: {
        trigger: document.documentElement,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 0.3, // Matches smooth scroll feel
      }
    });

    return () => {
      anim.kill();
      ScrollTrigger.getAll().forEach(st => st.kill());
    };
  }, []);

  return (
    <div className="scroll-progress">
      <div
        ref={progressBarRef}
        className="scroll-progress__bar"
        style={{ transformOrigin: 'left', transform: 'scaleX(0)' }}
      />
    </div>
  );
};

export default ScrollProgress;
