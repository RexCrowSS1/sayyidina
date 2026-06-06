import { useRef, useCallback } from 'react';

/**
 * useMagnetic — Custom hook for magnetic button behavior.
 * 
 * When the user hovers over the element, it applies a subtle 
 * translate pull toward the cursor position, creating an elastic
 * "magnetic" feel. Springs back on mouse leave.
 * 
 * @param {number} strength - Pull strength multiplier (default: 0.3)
 * @returns {{ ref, onMouseMove, onMouseLeave }}
 */
export function useMagnetic(strength = 0.3) {
  const ref = useRef(null);

  const onMouseMove = useCallback((e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const deltaX = (e.clientX - centerX) * strength;
    const deltaY = (e.clientY - centerY) * strength;
    ref.current.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
  }, [strength]);

  const onMouseLeave = useCallback(() => {
    if (!ref.current) return;
    ref.current.style.transform = 'translate(0px, 0px)';
  }, []);

  return { ref, onMouseMove, onMouseLeave };
}
