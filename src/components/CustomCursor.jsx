import { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [active, setActive] = useState(false);
  const [enabled, setEnabled] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const canUseCursor =
      window.matchMedia('(pointer: fine)').matches &&
      !window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    setEnabled(canUseCursor);
    if (!canUseCursor) return undefined;

    const move = (event) => {
      setVisible(true);
      setPosition({ x: event.clientX, y: event.clientY });
    };

    const over = (event) => {
      setActive(Boolean(event.target.closest('a, button, [data-cursor]')));
    };

    const hide = () => {
      setVisible(false);
      setActive(false);
    };

    const handleMouseOut = (event) => {
      if (!event.relatedTarget) hide();
    };

    window.addEventListener('mousemove', move);
    window.addEventListener('mouseover', over);
    window.addEventListener('mouseout', handleMouseOut);
    window.addEventListener('blur', hide);
    document.documentElement.addEventListener('mouseenter', move);
    document.documentElement.addEventListener('mouseleave', hide);

    return () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseover', over);
      window.removeEventListener('mouseout', handleMouseOut);
      window.removeEventListener('blur', hide);
      document.documentElement.removeEventListener('mouseenter', move);
      document.documentElement.removeEventListener('mouseleave', hide);
    };
  }, []);

  if (!enabled) return null;

  return (
    <div
      aria-hidden="true"
      className={`custom-cursor ${active ? 'active' : ''} ${visible ? 'visible' : ''}`}
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0) translate(-50%, -50%)`,
      }}
    />
  );
}
