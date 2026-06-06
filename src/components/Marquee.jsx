import { useEffect, useRef } from 'react';

/**
 * Marquee — Infinite kinetic text loop.
 * 
 * The marquee scrolls horizontally forever via CSS animation.
 * A GSAP ScrollTrigger callback can adjust animation speed
 * based on scroll velocity (passed as prop).
 * 
 * Content is duplicated to create a seamless loop.
 */
const MARQUEE_ITEMS = [
  'Creative Developer',
  '✦',
  'UI/UX Designer',
  '✦',
  'React Specialist',
  '✦',
  'Digital Craftsman',
  '✦',
  'Problem Solver',
  '✦',
  'Frontend Engineer',
  '✦',
];

export default function Marquee({ speed = 1, className = '' }) {
  const trackRef = useRef(null);

  useEffect(() => {
    if (!trackRef.current) return;
    // Adjust CSS animation duration based on speed prop
    // Lower duration = faster scroll. Base duration is 40s.
    const duration = Math.max(5, 40 / speed);
    trackRef.current.style.animationDuration = `${duration}s`;
  }, [speed]);

  return (
    <div className={`overflow-hidden pointer-events-none select-none ${className}`}>
      <div ref={trackRef} className="marquee-track">
        {/* Render content twice for seamless loop */}
        {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
          <span key={i} className="marquee-item">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
