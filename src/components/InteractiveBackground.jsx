import { useEffect } from 'react';
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from 'framer-motion';

export default function InteractiveBackground() {
  const reduceMotion = useReducedMotion();
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const smoothX = useSpring(pointerX, { stiffness: 70, damping: 24, mass: 0.7 });
  const smoothY = useSpring(pointerY, { stiffness: 70, damping: 24, mass: 0.7 });

  const sceneRotateX = useTransform(smoothY, [-1, 1], [7, -7]);
  const sceneRotateY = useTransform(smoothX, [-1, 1], [-9, 9]);
  const sceneX = useTransform(smoothX, [-1, 1], [-22, 22]);
  const sceneY = useTransform(smoothY, [-1, 1], [-14, 14]);
  const blockAX = useTransform(smoothX, [-1, 1], [-42, 42]);
  const blockAY = useTransform(smoothY, [-1, 1], [-30, 30]);
  const blockBX = useTransform(smoothX, [-1, 1], [34, -34]);
  const blockBY = useTransform(smoothY, [-1, 1], [26, -26]);
  const scanX = useTransform(smoothX, [-1, 1], ['18%', '82%']);
  const scanY = useTransform(smoothY, [-1, 1], ['18%', '76%']);

  useEffect(() => {
    if (reduceMotion) return undefined;

    const pointerIsFine = window.matchMedia('(pointer: fine)').matches;
    if (!pointerIsFine) return undefined;

    const handlePointerMove = (event) => {
      pointerX.set((event.clientX / window.innerWidth - 0.5) * 2);
      pointerY.set((event.clientY / window.innerHeight - 0.5) * 2);
    };

    const resetPointer = () => {
      pointerX.set(0);
      pointerY.set(0);
    };

    window.addEventListener('pointermove', handlePointerMove);
    window.addEventListener('pointerleave', resetPointer);

    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerleave', resetPointer);
    };
  }, [pointerX, pointerY, reduceMotion]);

  return (
    <div className="interactive-background" aria-hidden="true">
      <motion.div
        className="interactive-scan"
        style={{
          left: reduceMotion ? '50%' : scanX,
          top: reduceMotion ? '48%' : scanY,
        }}
      />
      <motion.div
        className="interactive-scene"
        style={{
          x: reduceMotion ? 0 : sceneX,
          y: reduceMotion ? 0 : sceneY,
          rotateX: reduceMotion ? 0 : sceneRotateX,
          rotateY: reduceMotion ? 0 : sceneRotateY,
        }}
      >
        <div className="interactive-plane interactive-plane-back" />
        <div className="interactive-plane interactive-plane-floor" />
        <motion.div className="interactive-block block-a" style={{ x: blockAX, y: blockAY }} />
        <motion.div className="interactive-block block-b" style={{ x: blockBX, y: blockBY }} />
        <motion.div className="interactive-block block-c" style={{ x: blockBX, y: blockAY }} />
        <div className="interactive-line line-a" />
        <div className="interactive-line line-b" />
      </motion.div>
    </div>
  );
}
