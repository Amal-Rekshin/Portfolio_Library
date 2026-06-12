import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import './CustomCursor.css';

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const cursorDotRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const dot = cursorDotRef.current;

    if (!cursor || !dot) return;

    // Set initial state - VISIBLE by default to prevent issues
    gsap.set([cursor, dot], { xPercent: -50, yPercent: -50, opacity: 1 });

    const xCursor = gsap.quickTo(cursor, "x", { duration: 0.4, ease: "power3" });
    const yCursor = gsap.quickTo(cursor, "y", { duration: 0.4, ease: "power3" });
    const xDot = gsap.quickTo(dot, "x", { duration: 0.1, ease: "power3" });
    const yDot = gsap.quickTo(dot, "y", { duration: 0.1, ease: "power3" });

    const moveCursor = (e) => {
      xCursor(e.clientX);
      yCursor(e.clientY);
      xDot(e.clientX);
      yDot(e.clientY);
    };

    const onMouseEnterElement = () => {
      gsap.to(cursor, {
        width: 60,
        height: 60,
        borderColor: "rgba(6, 182, 212, 0.8)",
        backgroundColor: "rgba(6, 182, 212, 0.1)",
        duration: 0.3
      });
      gsap.to(dot, { scale: 1.5, backgroundColor: "#EC4899", duration: 0.3 });
    };

    const onMouseLeaveElement = () => {
      gsap.to(cursor, {
        width: 40,
        height: 40,
        borderColor: "rgba(124, 58, 237, 0.5)",
        backgroundColor: "transparent",
        duration: 0.3
      });
      gsap.to(dot, { scale: 1, backgroundColor: "#06B6D4", duration: 0.3 });
    };

    window.addEventListener('mousemove', moveCursor);

    const setupInteractions = () => {
      const elements = document.querySelectorAll('a, button, input, textarea, [data-cursor-hover], .skills__category-header');
      elements.forEach(el => {
        el.addEventListener('mouseenter', onMouseEnterElement);
        el.addEventListener('mouseleave', onMouseLeaveElement);
      });
      return elements;
    };

    let interactiveElements = setupInteractions();

    const observer = new MutationObserver(() => {
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', onMouseEnterElement);
        el.removeEventListener('mouseleave', onMouseLeaveElement);
      });
      interactiveElements = setupInteractions();
    });

    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      observer.disconnect();
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', onMouseEnterElement);
        el.removeEventListener('mouseleave', onMouseLeaveElement);
      });
    };
  }, []);

  return (
    <>
      <div ref={cursorRef} className="custom-cursor" />
      <div ref={cursorDotRef} className="custom-cursor-dot" />
    </>
  );
};

export default CustomCursor;
