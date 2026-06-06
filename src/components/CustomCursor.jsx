import { useEffect, useRef, useState } from 'react';

/**
 * CustomCursor — A mix-blend-mode: difference cursor that scales
 * and morphs when hovering over interactive elements.
 * 
 * Uses requestAnimationFrame for the dot (instant follow)
 * and a lerp for the ring (lag/inertia).
 * Hidden on touch devices via CSS media query.
 */
export default function CustomCursor({ activeSection }) {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);
  const isContact = activeSection === 'contact';

  // We use refs instead of state for position to avoid React rendering overhead on every frame
  const mouse = useRef({ x: 0, y: 0 });
  const dotPos = useRef({ x: 0, y: 0 });
  const ringPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    // Check if device supports hover
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const handleMouseMove = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    const handleMouseOver = (e) => {
      // Check if we're hovering over a clickable element
      const target = e.target;
      if (
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button' ||
        target.closest('a') ||
        target.closest('button') ||
        target.hasAttribute('data-magnetic') ||
        target.closest('[data-magnetic]')
      ) {
        setIsHovering(true);
      }
    };

    const handleMouseOut = () => {
      setIsHovering(false);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);

    // Animation loop for smooth interpolation (lerp)
    let raf;
    const animate = () => {
      // Dot follows instantly
      dotPos.current.x = mouse.current.x;
      dotPos.current.y = mouse.current.y;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${dotPos.current.x - (isHovering ? 30 : 4)}px, ${dotPos.current.y - (isHovering ? 30 : 4)}px)`;
      }

      // Ring follows with inertia
      const ease = 0.12;
      ringPos.current.x += (mouse.current.x - ringPos.current.x) * ease;
      ringPos.current.y += (mouse.current.y - ringPos.current.y) * ease;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringPos.current.x - (isHovering ? 40 : 20)}px, ${ringPos.current.y - (isHovering ? 40 : 20)}px)`;
      }

      raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
    };
  }, [isHovering]);

  return (
    <>
      <div
        ref={dotRef}
        className={`cursor-dot ${isHovering ? 'is-hovering' : ''} ${isContact ? 'is-white' : ''}`}
      />
      <div
        ref={ringRef}
        className={`cursor-ring ${isHovering ? 'is-hovering' : ''} ${isContact ? 'is-white' : ''}`}
      />
    </>
  );
}
