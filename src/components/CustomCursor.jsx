import { useEffect, useRef, useState } from 'react';

export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const cursorRef = useRef(null);
  const frameRef = useRef(0);
  const positionRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canUseCursor =
      window.matchMedia('(pointer: fine)').matches &&
      !window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    setEnabled(canUseCursor);
    if (!canUseCursor) return undefined;

    const renderPosition = () => {
      frameRef.current = 0;
      const cursor = cursorRef.current;
      if (!cursor) return;

      const { x, y } = positionRef.current;
      cursor.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
    };

    const move = (event) => {
      positionRef.current = { x: event.clientX, y: event.clientY };
      cursorRef.current?.classList.add('visible');

      if (!frameRef.current) {
        frameRef.current = window.requestAnimationFrame(renderPosition);
      }
    };

    const over = (event) => {
      cursorRef.current?.classList.toggle(
        'active',
        Boolean(event.target.closest('a, button, [data-cursor]')),
      );
    };

    const hide = () => {
      cursorRef.current?.classList.remove('visible', 'active');
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
      if (frameRef.current) window.cancelAnimationFrame(frameRef.current);
    };
  }, []);

  if (!enabled) return null;

  return (
    <div
      ref={cursorRef}
      aria-hidden="true"
      className="custom-cursor"
    />
  );
}
