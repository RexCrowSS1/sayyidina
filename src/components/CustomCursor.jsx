import { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [active, setActive] = useState(false);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const canUseCursor =
      window.matchMedia('(pointer: fine)').matches &&
      !window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    setEnabled(canUseCursor);
    if (!canUseCursor) return undefined;

    const move = (event) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    const over = (event) => {
      setActive(Boolean(event.target.closest('a, button, [data-cursor]')));
    };

    window.addEventListener('mousemove', move);
    window.addEventListener('mouseover', over);

    return () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseover', over);
    };
  }, []);

  if (!enabled) return null;

  return (
    <div
      aria-hidden="true"
      className={`custom-cursor ${active ? 'active' : ''}`}
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0) translate(-50%, -50%)`,
      }}
    />
  );
}
